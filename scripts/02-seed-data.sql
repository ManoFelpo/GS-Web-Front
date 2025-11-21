-- Seed learning paths
INSERT INTO learning_paths (title, description, category, difficulty, duration_hours, modules_count) VALUES
('AI & Machine Learning Fundamentals', 'Master the basics of AI and ML', 'Technology', 'Beginner', 40, 8),
('Advanced React Patterns', 'Deep dive into React advanced concepts', 'Technology', 'Advanced', 30, 6),
('UX/UI Design Bootcamp', 'Complete guide to modern design principles', 'Design', 'Beginner', 50, 10),
('Data Analytics Masterclass', 'Learn data analysis and visualization', 'Technology', 'Intermediate', 45, 9),
('Product Management Essentials', 'Build products that matter', 'Business', 'Beginner', 35, 7);

-- Seed challenges
INSERT INTO challenges (title, description, type, difficulty, points_reward, estimated_duration_minutes) VALUES
('Build a Todo App', 'Create a functional todo application with React', 'coding', 'Easy', 150, 45),
('Design a Dashboard', 'Create a modern analytics dashboard UI', 'design', 'Medium', 200, 60),
('Optimize Performance', 'Improve React app performance by 50%', 'problem-solving', 'Hard', 300, 90),
('Simulate Market Impact', 'Use FuturoSim to predict AI impact on jobs', 'simulation', 'Medium', 250, 75),
('Algorithm Challenge', 'Solve complex algorithmic problems', 'coding', 'Hard', 400, 120);

-- Seed achievements
INSERT INTO achievements (name, description, points_value) VALUES
('First Step', 'Complete your first challenge', 50),
('Skill Master', 'Reach level 5 in any skill', 100),
('Learning Path Hero', 'Complete an entire learning path', 200),
('Leaderboard Champion', 'Reach top 10 in the leaderboard', 500),
('Sustainability Champion', 'Earn 1000 sustainability points', 300),
('Portfolio Star', 'Get 5 verified portfolio projects', 150),
('Challenge Completionist', 'Complete all challenges', 1000);
