# Contribuindo com o Dknowledge

**Português** · [English](./CONTRIBUTING.md)

O Dknowledge é uma base pública e aberta de conhecimento. Contribuições úteis incluem corrigir uma afirmação, conectar uma fonte, preencher um paper vazio, melhorar a navegação ou sincronizar uma tradução.

## Fluxo Git atual

1. Abra ou referencie uma issue descrevendo a lacuna e a evidência por trás da mudança.
2. Crie uma branch focada a partir de `master`.
3. Altere o menor conjunto coerente de documentos.
4. Quando o site ou o catálogo mudar, rode:

   ```sh
   node tools/build-catalog.js
   node tools/site-check.js
   ```

5. Abra um pull request para `master` e conecte-o à issue.

Não existe branch ativa de `peer-review` ou `community-review`. Durante a fase fundadora, a contribuição continua aberta e a embaixada e o embaixador também podem editar, integrar e corrigir diretamente pelo fluxo tradicional do Git. A fonte versionada de governança está em [`draykerdk/.github`](https://github.com/draykerdk/.github).

## Regras de evidência

- Separe o que está disponível agora do que é proposto ou histórico.
- Ligue afirmações a repositórios, documentos, issues, pull requests, testes ou deployments quando existirem.
- Não apresente um roadmap antigo como cronograma atual.
- Não publique conteúdo do cofre privado, contexto pessoal, credenciais ou memória de agentes.
- Preserve datas e o histórico de substituição ao atualizar material antigo.

## Boas primeiras contribuições

- Um dos 16 papers em inglês contém apenas o título: escreva seu escopo e conecte as fontes.
- Compare uma tradução com o documento em inglês e corrija o que ficou para trás.
- Encontre uma afirmação que não corresponde mais ao contrato do componente e abra uma issue de correção.
- Melhore o catálogo gerado ou a acessibilidade de [dknowledge.drayker.org](https://dknowledge.drayker.org).

Se o repositório correto não estiver claro, comece no [General Forum](https://github.com/draykerdk/general-forum/issues/new/choose).
