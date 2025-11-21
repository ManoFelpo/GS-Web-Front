# WorkSphere - Guia de Configuração

## Problema: "A conexão com localhost foi recusada"

Este erro ocorre porque o link de confirmação de email está apontando para `localhost`, que não é acessível quando você clica no link do seu email real.

## Solução: Configurar a Variável de Ambiente

### 1. No v0 (durante desenvolvimento):

Na barra lateral esquerda, vá para **Vars** e adicione:

\`\`\`
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

### 2. No Vercel (para produção):

Após fazer deploy, vá para:
- Seu projeto no Vercel
- Settings → Environment Variables
- Adicione:

\`\`\`
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
\`\`\`

Substitua `seu-dominio.com` pelo domínio real do seu site.

## Como Funciona

- **NEXT_PUBLIC_SITE_URL**: URL base usada nos links de email
- **Fallback**: Se não definir, usa `window.location.origin` (localhost:3000)
- **Email Link**: Aponta para `{NEXT_PUBLIC_SITE_URL}/auth/callback`

## Teste Local

1. Configure `NEXT_PUBLIC_SITE_URL=http://localhost:3000` no Vars
2. Reinicie o servidor
3. Tente se cadastrar novamente
4. Procure por um email de confirmação (se usar email real, verifique spam)
5. Clique no link - deve funcionar agora!

## Banco de Dados

Execute estes scripts SQL no Supabase (SQL Editor):
1. `01-init-schema.sql` - Cria tabelas
2. `02-seed-data.sql` - Adiciona dados de exemplo
3. `03-fix-rls-policies.sql` - Corrige permissões
4. `04-create-profile-trigger.sql` - Cria trigger automático

## Estrutura do Projeto

- `/app/auth/signup` - Página de cadastro
- `/app/auth/login` - Página de login
- `/app/auth/callback` - Processa confirmação de email
- `/app/profissional` - Dashboard do profissional
- `/app/empresa` - Dashboard da empresa
- `/scripts` - Scripts SQL

## Suporte

Se ainda não funcionar:
1. Verifique se `NEXT_PUBLIC_SITE_URL` está configurada nas Vars
2. Reinicie o servidor
3. Verifique o console do navegador (F12) para erros
