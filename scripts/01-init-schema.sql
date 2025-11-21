-- Users profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('professional', 'business')),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  location TEXT,
  skills TEXT[],
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Skills table
CREATE TABLE IF NOT EXISTS skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  skill_name TEXT NOT NULL,
  level INTEGER DEFAULT 1 CHECK (level >= 1 AND level <= 5),
  proficiency FLOAT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Learning paths
CREATE TABLE IF NOT EXISTS learning_paths (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT,
  difficulty TEXT DEFAULT 'Beginner' CHECK (difficulty IN ('Beginner', 'Intermediate', 'Advanced')),
  duration_hours INTEGER,
  modules_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- User learning progress
CREATE TABLE IF NOT EXISTS learning_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  path_id UUID NOT NULL REFERENCES learning_paths(id) ON DELETE CASCADE,
  progress_percentage INTEGER DEFAULT 0,
  status TEXT DEFAULT 'In Progress' CHECK (status IN ('Not Started', 'In Progress', 'Completed')),
  enrolled_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP
);

-- Challenges/Games
CREATE TABLE IF NOT EXISTS challenges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL CHECK (type IN ('coding', 'design', 'problem-solving', 'simulation')),
  difficulty TEXT DEFAULT 'Medium' CHECK (difficulty IN ('Easy', 'Medium', 'Hard')),
  points_reward INTEGER DEFAULT 100,
  estimated_duration_minutes INTEGER,
  instructions TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- User challenge attempts
CREATE TABLE IF NOT EXISTS challenge_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  challenge_id UUID NOT NULL REFERENCES challenges(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'In Progress' CHECK (status IN ('In Progress', 'Completed', 'Failed')),
  score INTEGER DEFAULT 0,
  started_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP,
  solution_data JSONB
);

-- Portfolio projects
CREATE TABLE IF NOT EXISTS portfolio_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT,
  technologies TEXT[],
  image_url TEXT,
  project_url TEXT,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Achievements/Badges
CREATE TABLE IF NOT EXISTS achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  icon_url TEXT,
  criteria TEXT,
  points_value INTEGER DEFAULT 50,
  created_at TIMESTAMP DEFAULT NOW()
);

-- User achievements
CREATE TABLE IF NOT EXISTS user_achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  achievement_id UUID NOT NULL REFERENCES achievements(id) ON DELETE CASCADE,
  earned_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, achievement_id)
);

-- Marketplace opportunities
CREATE TABLE IF NOT EXISTS opportunities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  required_skills TEXT[],
  location TEXT,
  salary_range TEXT,
  job_type TEXT DEFAULT 'Full-time',
  impact_score INTEGER DEFAULT 70,
  created_at TIMESTAMP DEFAULT NOW()
);

-- User opportunity applications
CREATE TABLE IF NOT EXISTS opportunity_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  opportunity_id UUID NOT NULL REFERENCES opportunities(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'Applied' CHECK (status IN ('Applied', 'Reviewing', 'Rejected', 'Accepted')),
  match_score FLOAT DEFAULT 0,
  applied_at TIMESTAMP DEFAULT NOW()
);

-- Sustainability impact
CREATE TABLE IF NOT EXISTS sustainability_impact (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  action_type TEXT NOT NULL,
  co2_saved_kg FLOAT DEFAULT 0,
  people_impacted INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Leaderboard points
CREATE TABLE IF NOT EXISTS leaderboard (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE UNIQUE,
  total_points INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  streak INTEGER DEFAULT 0,
  rank INTEGER,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE learning_paths ENABLE ROW LEVEL SECURITY;
ALTER TABLE learning_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE challenge_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE opportunity_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE sustainability_impact ENABLE ROW LEVEL SECURITY;
ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view their own profile" ON user_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON user_profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can view public profiles" ON user_profiles
  FOR SELECT USING (TRUE);

CREATE POLICY "Users can view their skills" ON skills
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their skills" ON skills
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Everyone can view learning paths" ON learning_paths
  FOR SELECT USING (TRUE);

CREATE POLICY "Users can view their learning progress" ON learning_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert learning progress" ON learning_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Everyone can view challenges" ON challenges
  FOR SELECT USING (TRUE);

CREATE POLICY "Users can view their challenge attempts" ON challenge_attempts
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert challenge attempts" ON challenge_attempts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their portfolio" ON portfolio_projects
  FOR SELECT USING (TRUE);

CREATE POLICY "Users can insert portfolio projects" ON portfolio_projects
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their portfolio" ON portfolio_projects
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Everyone can view achievements" ON achievements
  FOR SELECT USING (TRUE);

CREATE POLICY "Users can view their achievements" ON user_achievements
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can view opportunities" ON opportunities
  FOR SELECT USING (TRUE);

CREATE POLICY "Users can apply to opportunities" ON opportunity_applications
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their applications" ON opportunity_applications
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can view sustainability impact" ON sustainability_impact
  FOR SELECT USING (TRUE);

CREATE POLICY "Users can view leaderboard" ON leaderboard
  FOR SELECT USING (TRUE);
