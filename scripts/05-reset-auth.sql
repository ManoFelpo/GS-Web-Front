-- Script para limpar dados de teste (opcional)
-- Execute apenas se precisar começar do zero

-- Apagar todos os usuários (cuidado!)
DELETE FROM auth.users;

-- Apagar todos os perfis
DELETE FROM public.user_profiles;

-- Resetar sequences
ALTER SEQUENCE user_profiles_id_seq RESTART WITH 1;
