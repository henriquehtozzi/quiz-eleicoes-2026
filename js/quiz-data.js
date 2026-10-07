/**
 * Banco de Dados de Propostas Oficiais - Eleições 2026
 * Fonte: Diretrizes e Planos de Governo protocolados no Tribunal Superior Eleitoral (TSE)
 * 
 * Cada pergunta apresenta 4 propostas reais (2 de Lula / PT e 2 de Flávio Bolsonaro / PL).
 * As opções são apresentadas de forma cega ao eleitor durante o quiz.
 */

const quizThemes = [
  {
    id: 1,
    tag: "Economia e Desenvolvimento",
    title: "1. Dinheiro, Impostos e Economia",
    question: "Se você fosse presidente, qual seria a sua prioridade principal para cuidar do dinheiro e da economia do país?",
    context: "O dilema central entre quem defende o investimento público e justiça tributária versus quem defende corte drástico do Estado e privatizações.",
    options: [
      {
        id: "1A",
        letter: "A",
        text: "Cobrar imposto de acordo com a renda de cada um: quem ganha menos fica isento do imposto sobre o salário, e os super-ricos pagam mais. Além disso, o governo deve investir dinheiro para gerar novos empregos e fábricas modernas no Brasil.",
        candidate: "Luiz Inácio Lula da Silva",
        party: "PT",
        pages: "Páginas 10, 19, 42 e 50",
        tseSummary: "Reforma tributária progressiva, isenção de IR para a classe trabalhadora, tributação de grandes patrimônios e neoindustrialização verde liderada por investimentos públicos estratégicos."
      },
      {
        id: "1B",
        letter: "B",
        text: "Atrair empresas privadas para investir no Brasil. Para isso, vamos diminuir impostos das empresas, facilitar as vendas para fora e passar serviços do governo para a iniciativa privada administrar.",
        candidate: "Flávio Bolsonaro",
        party: "PL",
        pages: "Páginas 12, 15, 22 e 28",
        tseSummary: "Desregulamentação de mercados, desoneração irrestrita de pessoas jurídicas e aceleração de concessões e privatizações de patrimônio e serviços públicos."
      },
      {
        id: "1C",
        letter: "C",
        text: "Usar o dinheiro do governo para investir em tecnologia e indústrias limpas, que cuidam da natureza e geram empregos de qualidade no país inteiro.",
        candidate: "Luiz Inácio Lula da Silva",
        party: "PT",
        pages: "Páginas 15, 21 e 43",
        tseSummary: "Plano de Transição Ecológica com financiamento do BNDES em inovação tecnológica, matriz energética limpa e cadeias produtivas sustentáveis."
      },
      {
        id: "1D",
        letter: "D",
        text: "Diminuir o tamanho do governo cortando pelo menos dez ministérios e gastando bem menos dinheiro público com a máquina do Estado.",
        candidate: "Flávio Bolsonaro",
        party: "PL",
        pages: "Páginas 7, 10 e 14",
        tseSummary: "Enxugamento ministerial com extinção de pastas estratégicas, teto rígido de gastos e redução estrutural da capacidade operativa das políticas públicas."
      }
    ]
  },
  {
    id: 2,
    tag: "Segurança Pública e Cidadania",
    title: "2. Segurança Pública e Combate ao Crime",
    question: "Se você fosse presidente, qual seria a sua prioridade principal para proteger a população e garantir paz social?",
    context: "O confronto entre inteligência policial com oportunidades sociais versus encarceramento em massa e vigilância punitiva.",
    options: [
      {
        id: "2A",
        letter: "A",
        text: "Aumentar as vagas nas cadeias e colocar câmeras de reconhecimento facial nas ruas de todo o Brasil para pegar procurados pela justiça.",
        candidate: "Flávio Bolsonaro",
        party: "PL",
        pages: "Páginas 18, 19 e 24",
        tseSummary: "Expansão de presídios, policiamento ostensivo e implantação generalizada de monitoramento eletrônico biométrico em espaços públicos."
      },
      {
        id: "2B",
        letter: "B",
        text: "Investir na inteligência da polícia para tirar o dinheiro das facções criminosas, controlar o uso de armas e integrar o trabalho entre governos municipais, estaduais e federal, aliando repressão qualificada com redução das desigualdades e oportunidades para a juventude.",
        candidate: "Luiz Inácio Lula da Silva",
        party: "PT",
        pages: "Páginas 30, 31 e 32",
        tseSummary: "Sistema Único de Segurança Pública (SUSP), asfixia patrimonial e financeira do crime organizado, controle rigoroso de armamentos e prevenção social da violência junto aos jovens."
      },
      {
        id: "2C",
        letter: "C",
        text: "Punições bem mais severas: tratar facções criminosas com leis de terrorismo, tirar a redução de pena de quem comete crimes graves e diminuir a idade de responsabilidade penal.",
        candidate: "Flávio Bolsonaro",
        party: "PL",
        pages: "Páginas 20, 21 e 25",
        tseSummary: "Endurecimento da Lei Antiterrorismo, extinção de progressão de regime penal para delitos graves e redução da maioridade penal para 16 anos."
      },
      {
        id: "2D",
        letter: "D",
        text: "Desenvolver tecnologias próprias do Brasil para proteger nossos dados digitais e reforçar a fiscalização integrada nas fronteiras para evitar a entrada de armas pesadas e drogas.",
        candidate: "Luiz Inácio Lula da Silva",
        party: "PT",
        pages: "Páginas 33, 47 e 48",
        tseSummary: "Soberania em cibersegurança e comando unificado de vigilância de fronteiras terrestres e marítimas com Forças Armadas e Polícia Federal."
      }
    ]
  },
  {
    id: 3,
    tag: "Trabalho, Salário e Renda",
    title: "3. Trabalho, Salário e Direitos",
    question: "Se você fosse presidente, qual seria a sua prioridade principal para quem acorda cedo para trabalhar?",
    context: "A disputa entre valorização da classe trabalhadora e direitos versus desregulamentação trabalhista sem proteção legal.",
    options: [
      {
        id: "3A",
        letter: "A",
        text: "Garantir direitos trabalhistas para quem atua em plataformas digitais e manter a política de aumento real do salário-mínimo sempre acima da inflação todo ano.",
        candidate: "Luiz Inácio Lula da Silva",
        party: "PT",
        pages: "Páginas 11, 18 e 20",
        tseSummary: "Regulamentação e proteção previdenciária de trabalhadores por aplicativos e garantia constitucional do ganho real do salário mínimo anual."
      },
      {
        id: "3B",
        letter: "B",
        text: "Diminuir a jornada semanal de trabalho sem cortar salário (fim da escala extenuante) e garantir direitos e previdência para quem trabalha com aplicativos de entrega e transporte.",
        candidate: "Luiz Inácio Lula da Silva",
        party: "PT",
        pages: "Páginas 18, 19 e 22",
        tseSummary: "Debate e apoio à redução da jornada sem redução de remuneração, fim de escalas exaustivas como 6x1 e inclusão previdenciária de autônomos."
      },
      {
        id: "3C",
        letter: "C",
        text: "Ajudar as pessoas a conseguirem vagas no mercado privado, incentivando cursos técnicos e encaminhando quem recebe auxílio do governo para vagas formais de trabalho.",
        candidate: "Flávio Bolsonaro",
        party: "PL",
        pages: "Páginas 13, 16 e 30",
        tseSummary: "Parcerias com o Sistema S para capacitação rápida e regras de transição condicionadas para desligamento de beneficiários de programas sociais."
      },
      {
        id: "3D",
        letter: "D",
        text: "Dar mais liberdade para o trabalhador negociar direto com o patrão sobre como vai trabalhar, sem que as leis rígidas fiquem no caminho.",
        candidate: "Flávio Bolsonaro",
        party: "PL",
        pages: "Páginas 11, 14 e 17",
        tseSummary: "Aprofundamento da flexibilização trabalhista, prevalência irrestrita do negociado individual sobre o legislado e redução das tutelas da CLT."
      }
    ]
  },
  {
    id: 4,
    tag: "Meio Ambiente, Clima e Soberania Alimentar",
    title: "4. Meio Ambiente, Clima e Comida no Prato",
    question: "Se você fosse presidente, qual seria a sua prioridade para o meio ambiente, agricultura e produção de alimentos?",
    context: "A escolha entre combate à fome com estoques públicos e sustentabilidade versus favorecimento exclusivo do grande agronegócio de exportação.",
    options: [
      {
        id: "4A",
        letter: "A",
        text: "Proteger as florestas, zerar o desmatamento ilegal, combater as mudanças do clima e incentivar projetos sustentáveis de produção no campo.",
        candidate: "Luiz Inácio Lula da Silva",
        party: "PT",
        pages: "Páginas 13, 40 e 41",
        tseSummary: "Desmatamento zero na Amazônia e Cerrado, fortalecimento dos órgãos ambientais (Ibama, ICMBio) e liderança na cúpula climática mundial."
      },
      {
        id: "4B",
        letter: "B",
        text: "Ajudar o produtor rural a renegociar suas dívidas, dar mais crédito e seguro para a lavoura não perder dinheiro com secas ou pragas.",
        candidate: "Flávio Bolsonaro",
        party: "PL",
        pages: "Páginas 26, 27 e 29",
        tseSummary: "Rolagem de passivos do grande agronegócio, securitização de crédito rural e desoneração tributária para insumos agrícolas."
      },
      {
        id: "4C",
        letter: "C",
        text: "Apoiar a agricultura familiar para produzir comida saudável e barata, distribuir terras improdutivas e fazer o governo comprar alimentos dos pequenos produtores para manter estoques reguladores e controlar os preços da comida.",
        candidate: "Luiz Inácio Lula da Silva",
        party: "PT",
        pages: "Páginas 14, 24 e 25",
        tseSummary: "Plano Safra da Agricultura Familiar (Pronaf recorde), recomposição dos estoques públicos de alimentos da Conab e combate estrutural à inflação dos alimentos básicos."
      },
      {
        id: "4D",
        letter: "D",
        text: "Aumentar as obras de irrigação onde falta água, ajudar no registro de terras e premiar produtores rurais que cuidam do meio ambiente.",
        candidate: "Flávio Bolsonaro",
        party: "PL",
        pages: "Páginas 27, 28 e 31",
        tseSummary: "Infraestrutura hídrica para o agronegócio, titulação expressa de terras privadas e mecanismos de pagamento voluntário por serviços ambientais."
      }
    ]
  },
  {
    id: 5,
    tag: "Relações Internacionais e Soberania",
    title: "5. O Brasil e o Cenário Internacional",
    question: "Se você fosse presidente, qual postura o Brasil deveria adotar nas relações diplomáticas e comerciais com outros países?",
    context: "O contraste entre liderança multilateral soberana do Sul Global versus subordinação geopolítica ideológica e acordos pontuais.",
    options: [
      {
        id: "5A",
        letter: "A",
        text: "Fazer parcerias comerciais pragmáticas e entrar em clubes das maiores economias do mundo para atrair investidores privados de fora.",
        candidate: "Flávio Bolsonaro",
        party: "PL",
        pages: "Páginas 33, 34 e 36",
        tseSummary: "Prioridade na adesão irrestrita à OCDE, desonerações para atração de fundos internacionais e acordos comerciais bilaterais de livre mercado."
      },
      {
        id: "5B",
        letter: "B",
        text: "Unir forças com países vizinhos da América do Sul e nações em desenvolvimento para defender o meio ambiente e dar mais força ao Brasil em decisões mundiais.",
        candidate: "Luiz Inácio Lula da Silva",
        party: "PT",
        pages: "Páginas 44, 45 e 46",
        tseSummary: "Integração regional sul-americana (Mercosul, Unasul), protagonismo no bloco BRICS ampliado e liderança nas negociações climáticas e de preservação da Amazônia."
      },
      {
        id: "5C",
        letter: "C",
        text: "Mudar as regras de organizações internacionais para que países em desenvolvimento tenham a mesma voz e poder de decisão que os países mais ricos.",
        candidate: "Luiz Inácio Lula da Silva",
        party: "PT",
        pages: "Páginas 45 e 46",
        tseSummary: "Reforma urgente da governança global (Conselho de Segurança da ONU, FMI, Banco Mundial) para superar o protecionismo e a assimetria do Norte desenvolvido."
      },
      {
        id: "5D",
        letter: "D",
        text: "Fazer aliança direta e prioritária com países parceiros tradicionais, como Estados Unidos e Israel, buscando vender nossos produtos.",
        candidate: "Flávio Bolsonaro",
        party: "PL",
        pages: "Páginas 34, 35 e 37",
        tseSummary: "Alinhamento geopolítico preferencial ao eixo Washington-Tel Aviv com abertura comercial preferencial e acordos bilaterais de segurança e defesa."
      }
    ]
  },
  {
    id: 6,
    tag: "Saúde, Educação e Proteção Social",
    title: "6. Saúde, Educação e Cuidado com as Pessoas",
    question: "Se você fosse presidente, qual seria a sua prioridade principal para a saúde pública, serviços sociais e educação?",
    context: "O embate entre fortalecimento do SUS 100% público e gratuito com programas sociais versus privatização com vouchers e parcerias com o setor privado.",
    options: [
      {
        id: "6A",
        letter: "A",
        text: "Regular o uso das redes sociais para proteger crianças e jovens na internet, reforçar os postos de saúde do bairro e o atendimento em casa para os idosos, e reforçar as leis de proteção de animais contra maus-tratos.",
        candidate: "Luiz Inácio Lula da Silva",
        party: "PT",
        pages: "Páginas 28, 35, 36 e 49",
        tseSummary: "Estratégia Nacional de Saúde Mental e Saúde Digital, proteção infantojuvenil em telas, ampliação da Estratégia Saúde da Família e políticas de bem-estar animal."
      },
      {
        id: "6B",
        letter: "B",
        text: "Organizar a saúde com registros no CPF, criar centros de atendimento à mulher e proibir que beneficiários de auxílios usem esse dinheiro em apostas no celular.",
        candidate: "Flávio Bolsonaro",
        party: "PL",
        pages: "Páginas 8, 22 e 23",
        tseSummary: "Digitalização de prontuários associados ao número de CPF, núcleos especializados de atendimento feminino e bloqueio financeiro de jogos eletrônicos (bets) no Bolsa Família."
      },
      {
        id: "6C",
        letter: "C",
        text: "Fortalecer a rede de saúde pública do SUS, garantir remédios de graça na Farmácia Popular, moradia digna pelo Minha Casa Minha Vida e apoiar financeiramente estudantes do ensino médio para não largarem a escola (programa Pé-de-Meia).",
        candidate: "Luiz Inácio Lula da Silva",
        party: "PT",
        pages: "Páginas 26, 27, 34 e 37",
        tseSummary: "SUS fortalecido e integralmente estatal, ampliação maciça da gratuidade da Farmácia Popular, subsídio habitacional pelo Minha Casa Minha Vida e permanência escolar via Poupança Pé-de-Meia."
      },
      {
        id: "6D",
        letter: "D",
        text: "Usar hospitais e clínicas privadas em parceria com o SUS para zerar as filas de exames e consultas, e dar cupons (vouchers) para colocar crianças em creches de bairros.",
        candidate: "Flávio Bolsonaro",
        party: "PL",
        pages: "Páginas 9, 21 e 24",
        tseSummary: "Contratação direta da rede suplementar privada com verbas públicas para procedimentos eletivos e sistema de vouchers educacionais na primeira infância."
      }
    ]
  },
  {
    id: 7,
    tag: "Instituições, Democracia e Poderes",
    title: "7. Relação entre os Poderes e Democracia",
    question: "Se você fosse presidente, qual seria a sua prioridade na relação do Executivo com o Congresso Nacional e o Poder Judiciário?",
    context: "A defesa das garantias democráticas e harmonia institucional versus ofensivas de controle e desestabilização dos tribunais.",
    options: [
      {
        id: "7A",
        letter: "A",
        text: "Conversar e negociar com o Congresso de forma transparente para decidir onde investir o dinheiro público, respeitando a autonomia dos juízes e da Justiça sem qualquer tipo de interferência ou ameaça do governo.",
        candidate: "Luiz Inácio Lula da Silva",
        party: "PT",
        pages: "Páginas 8, 21 e 82",
        tseSummary: "Coalizão republicana com transparência orçamentária, diálogo institucional sem coerção e respeito estrito à separação de poderes."
      },
      {
        id: "7B",
        letter: "B",
        text: "Mudar as regras da Justiça para limitar decisões individuais de ministros do STF, proibir que ex-ministros do governo virem juízes do tribunal imediatamente e proibir parente de magistrado de atuar nos mesmos processos.",
        candidate: "Flávio Bolsonaro",
        party: "PL",
        pages: "Páginas 38, 39 e 41",
        tseSummary: "Restrição de decisões monocráticas no Supremo Tribunal Federal, criação de mandatos com quarentena rigorosa e novas vedações de nepotismo no Judiciário."
      },
      {
        id: "7C",
        letter: "C",
        text: "Fortalecer a democracia participativa, combater o orçamento secreto prestando contas de cada centavo aprovado pelos deputados e proteger os tribunais e a Constituição contra ataques e tentativas de golpe ou punição política.",
        candidate: "Luiz Inácio Lula da Silva",
        party: "PT",
        pages: "Páginas 21, 22 e 83",
        tseSummary: "Defesa irrestrita do Estado Democrático de Direito, extinção de emendas secretas, ampliação da participação popular em conferências e defesa da Carta Magna."
      },
      {
        id: "7D",
        letter: "D",
        text: "Fazer uma reforma para acabar com a reeleição de presidente, governadores e prefeitos, além de mudar as leis no Congresso para punir com rigor abusos de autoridade no sistema de Justiça.",
        candidate: "Flávio Bolsonaro",
        party: "PL",
        pages: "Páginas 40, 42 e 45",
        tseSummary: "Proposta de Emenda à Constituição extinguindo a reeleição no Poder Executivo e recrudescimento da Lei de Abuso de Autoridade contra magistrados e promotores."
      }
    ]
  }
];

// Comparações e contrapontos aprofundados para o resultado editorial
const editorialAnalysis = {
  lula: {
    title: "O Projeto de Reconstrução, Soberania e Justiça Social (Lula - PT)",
    badge: "Modelo Popular e Desenvolvimentista",
    summary: "Suas escolhas priorizam um Brasil onde o Estado é o garantidor de direitos fundamentais, motor da distribuição de renda e indutor da economia.",
    bulletPoints: [
      {
        heading: "Poder de Compra e Trabalho Digno:",
        text: "Valorização contínua do salário mínimo acima da inflação todo ano, isenção do Imposto de Renda para rendas mais baixas, tributação dos super-ricos e proteção aos trabalhadores de aplicativos."
      },
      {
        heading: "Saúde e Educação como Direitos Universais:",
        text: "Defesa intransigente do SUS 100% público e gratuito, expansão da Farmácia Popular com medicamentos gratuitos e garantia de permanência escolar da juventude com o Pé-de-Meia."
      },
      {
        heading: "Combate à Fome e Soberania Alimentar:",
        text: "Investimento recorde na agricultura familiar e retomada dos estoques reguladores de alimentos (Conab) para baratear a comida nos mercados e feiras."
      },
      {
        heading: "Transição Ecológica e Liderança Global:",
        text: "Combate ao desmatamento com autoridade ambiental recomposta e liderança diplomática soberana junto aos países do Sul Global e fóruns climáticos internacionais."
      }
    ]
  },
  flavio: {
    title: "O Projeto Ultraliberal e de Desmonte Social (Direita / Flávio Bolsonaro - PL)",
    badge: "Modelo Privatista e Punitivo",
    summary: "Este modelo defende o enxugamento radical do Estado e a transferência de responsabilidades públicas essenciais para o setor privado.",
    bulletPoints: [
      {
        heading: "Desregulamentação e Precarização:",
        text: "Flexibilização das normas trabalhistas ('negociado sobre legislado' sem garantias legais), desonerações sem contrapartida social e corte de até dez ministérios estratégicos."
      },
      {
        heading: "Vouchers e Privatização dos Serviços Básicos:",
        text: "Em vez de estruturar o SUS e a educação pública permanente, aposta em compra de vagas em clínicas e creches privadas por cupons, drenando o orçamento público para o mercado."
      },
      {
        heading: "Privilégio ao Grande Agro de Exportação:",
        text: "Foco exclusivo em securitização de dívidas e crédito para grandes produtores rurais de commodities, sem foco em agricultura familiar e sem estoques reguladores de preços de alimentos."
      },
      {
        heading: "Enfraquecimento Institucional e Segurança Punitiva:",
        text: "Foco exclusivo em encarceramento em massa e vigilância, alinhamento ideológico automático a potências externas e iniciativas de enquadramento do Poder Judiciário."
      }
    ]
  }
};
