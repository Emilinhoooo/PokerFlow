-- PokerFlow Database Schema for Supabase
-- Run this in your Supabase SQL editor to set up the database

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Profiles table
create table if not exists public.profiles (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade unique not null,
  username text,
  elo integer default 1200 not null,
  puzzles_solved integer default 0 not null,
  correct_answers integer default 0 not null,
  current_streak integer default 0 not null,
  best_streak integer default 0 not null,
  solved_puzzle_ids integer[] default '{}' not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.profiles enable row level security;

-- Policies for profiles
create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = user_id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = user_id);

create policy "Users can insert their own profile"
  on public.profiles for insert
  with check (auth.uid() = user_id);

-- Function to automatically create profile on user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (user_id, username)
  values (new.id, new.raw_user_meta_data->>'username');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger for new user profile creation
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Function to update updated_at timestamp
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Trigger for updated_at
drop trigger if exists profiles_updated_at on public.profiles;
create trigger profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.handle_updated_at();

-- Leaderboard view (optional, for future features)
create or replace view public.leaderboard as
select 
  profiles.username,
  profiles.elo,
  profiles.puzzles_solved,
  profiles.correct_answers,
  profiles.best_streak,
  round(
    case when puzzles_solved > 0 
    then (correct_answers::decimal / puzzles_solved::decimal * 100) 
    else 0 
    end, 
    1
  ) as win_rate
from public.profiles
where puzzles_solved > 0
order by elo desc
limit 100;

-- Grant access to leaderboard view
grant select on public.leaderboard to authenticated;

-- Index for faster queries
create index if not exists profiles_user_id_idx on public.profiles(user_id);
create index if not exists profiles_elo_idx on public.profiles(elo desc);
