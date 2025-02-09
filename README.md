# Vintage Cuts - Site da Barbearia

## Guia do Proprietário

### Sobre o Site
Este é um site profissional desenvolvido especialmente para sua barbearia, com foco em converter visitantes em clientes. O site inclui:
- Página inicial moderna e atraente
- Integração com WhatsApp para agendamentos
- Lista de serviços com preços
- Informações de contato e localização
- Design responsivo (funciona em celulares, tablets e computadores)

### Como Personalizar o Site

#### 1. Informações de Contato
No arquivo `src/App.tsx`, você pode atualizar:
- Número do WhatsApp: Procure por `5511999999999` e substitua pelo seu número
- Endereço: Procure por `Rua Example, 123 - São Paulo, SP`
- Horário de funcionamento: Seção "Contact Section"
- Preços dos serviços: Seção "Services Section"

#### 2. Imagens
Para trocar a imagem principal:
1. Acesse [Unsplash](https://unsplash.com)
2. Escolha uma imagem de alta qualidade
3. Copie o link da imagem
4. No arquivo `src/App.tsx`, substitua o link atual na seção "Hero Section"

### Como Hospedar o Site

#### Opção 1: Netlify (Recomendado)
1. Crie uma conta em [Netlify](https://www.netlify.com)
2. Clique em "Add new site" > "Deploy manually"
3. Arraste a pasta `dist` (gerada após rodar `npm run build`)
4. Pronto! Seu site estará online

#### Opção 2: Vercel
1. Crie uma conta em [Vercel](https://vercel.com)
2. Conecte com seu repositório GitHub
3. Selecione o projeto e clique em "Deploy"

### Domínio Personalizado

Para usar seu próprio domínio (exemplo: www.suabarbearia.com.br):
1. Compre um domínio (recomendamos [Registro.br](https://registro.br) ou [GoDaddy](https://godaddy.com))
2. Na plataforma de hospedagem (Netlify/Vercel):
   - Vá em configurações do site
   - Adicione seu domínio personalizado
   - Siga as instruções para configurar os registros DNS

### Manutenção e Atualizações

#### Para Atualizar Preços ou Informações
1. Localize o arquivo `src/App.tsx`
2. Faça as alterações necessárias
3. Execute `npm run build`
4. Faça upload da nova pasta `dist` para sua hospedagem

#### Checklist Mensal
- Verificar se o número do WhatsApp está funcionando
- Confirmar se os preços estão atualizados
- Verificar se o endereço e horários estão corretos
- Testar o site em diferentes dispositivos

### Suporte Técnico

Se precisar de ajuda:
1. Para problemas de hospedagem:
   - Netlify: [Suporte Netlify](https://www.netlify.com/support/)
   - Vercel: [Suporte Vercel](https://vercel.com/support)
2. Para problemas com o domínio:
   - Contate o suporte do seu provedor de domínio

### Boas Práticas
- Mantenha os preços sempre atualizados
- Responda rapidamente às mensagens do WhatsApp
- Atualize as informações de funcionamento em feriados
- Faça backup regular do código-fonte

### Especificações Técnicas (Para Desenvolvedores)

#### Tecnologias Utilizadas
- React com TypeScript
- Tailwind CSS para estilos
- Vite para build
- Lucide React para ícones

#### Requisitos para Desenvolvimento
- Node.js 18+
- NPM 9+

#### Comandos Importantes
```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Gerar versão de produção
npm run build

# Testar versão de produção
npm run preview
```

### Segurança e Backup
- Mantenha suas credenciais de hospedagem seguras
- Salve o código-fonte em mais de um lugar
- Guarde este documento para referência futura

### Contatos Importantes
- Suporte Netlify: support@netlify.com
- Suporte Vercel: support@vercel.com
- Registro.br: registro@registro.br