/**
 * Banco de Dados de Propostas Oficiais - Eleições Presidenciais 2026
 * Fonte: Diretrizes e Planos de Governo protocolados no Tribunal Superior Eleitoral (TSE)
 * 
 * - Luiz Inácio Lula da Silva (PT / Coligação Brasil da Esperança)
 * - Flávio Bolsonaro (PL)
 */

const quizThemes = [
  {
    id: 1,
    tag: "Dinheiro e Economia",
    title: "1. Dinheiro e Economia",
    question: "Se você fosse presidente, qual seria a sua prioridade principal para cuidar do dinheiro do país?",
    context: "O dilema central entre quem defende investimento público, reindustrialização e justiça tributária versus corte do Estado e privatizações.",
    options: [
      {
        id: "1A",
        letter: "A",
        text: "Cobrar imposto de acordo com a renda de cada um: quem ganha menos fica isento do imposto sobre o salário, e os super-ricos pagam mais. Além disso, o governo deve investir dinheiro para gerar novos empregos e fábricas modernas no Brasil.",
        candidate: "Luiz Inácio Lula da Silva",
        coalition: "PT / Coligação Brasil da Esperança",
        party: "PT",
        pages: "Páginas 10, 19, 42 e 50",
        tseSummary: "Reforma tributária com justiça fiscal (isenção de IR para a classe trabalhadora e imposto sobre super-ricos) e investimentos públicos na neoindustrialização nacional."
      },
      {
        id: "1B",
        letter: "B",
        text: "Atrair empresas privadas para investir no Brasil. Para isso, vamos diminuir impostos das empresas, facilitar as vendas para fora e passar serviços do governo para a iniciativa privada administrar.",
        candidate: "Flávio Bolsonaro",
        coalition: "PL",
        party: "PL",
        pages: "Páginas 12, 15, 22 e 28",
        tseSummary: "Desregulamentação de mercados, desonerações corporativas amplas e privatização/concessão de serviços e estatais estratégicas."
      },
      {
        id: "1C",
        letter: "C",
        text: "Usar o dinheiro do governo para investir em tecnologia e indústrias limpas, que cuidam da natureza e geram empregos no país inteiro.",
        candidate: "Luiz Inácio Lula da Silva",
        coalition: "PT / Coligação Brasil da Esperança",
        party: "PT",
        pages: "Páginas 15, 21 e 43",
        tseSummary: "Plano de Transição Ecológica com financiamento público de inovação tecnológica, matriz energética limpa e cadeias produtivas verdes."
      },
      {
        id: "1D",
        letter: "D",
        text: "Diminuir o tamanho do governo cortando pelo menos dez ministérios e gastando bem menos dinheiro público com a infraestrutura e os funcionários que compõem a administração pública de serviços básicos para o país (segurança, saúde, educação, justiça, entre outros).",
        candidate: "Flávio Bolsonaro",
        coalition: "PL",
        party: "PL",
        pages: "Páginas 7, 10 e 14",
        tseSummary: "Extinção de pelo menos dez ministérios estratégicos, teto orçamentário rígido e redução de gastos com o funcionalismo e a infraestrutura dos serviços públicos básicos."
      }
    ]
  },
  {
    id: 2,
    tag: "Segurança Pública",
    title: "2. Segurança Pública",
    question: "Se você fosse presidente, qual seria a sua prioridade principal para proteger a população?",
    context: "O confronto entre inteligência policial, asfixia do crime organizado e prevenção social versus encarceramento em massa e vigilância punitiva.",
    options: [
      {
        id: "2A",
        letter: "A",
        text: "Aumentar as vagas nas cadeias e colocar câmeras de reconhecimento facial nas ruas de todo o Brasil para pegar procurados pela justiça.",
        candidate: "Flávio Bolsonaro",
        coalition: "PL",
        party: "PL",
        pages: "Páginas 18, 19 e 24",
        tseSummary: "Expansão da rede penitenciária, policiamento ostensivo e vigilância biométrica de reconhecimento facial em vias públicas."
      },
      {
        id: "2B",
        letter: "B",
        text: "Investir na inteligência da polícia para tirar o dinheiro das facções criminosas, controlar o uso de armas e integrar o trabalho entre os governos municipais, estaduais e o governo federal, redução das desigualdades e ampliação de oportunidades, especialmente para a juventude.",
        candidate: "Luiz Inácio Lula da Silva",
        coalition: "PT / Coligação Brasil da Esperança",
        party: "PT",
        pages: "Páginas 30, 31 e 32",
        tseSummary: "Sistema Único de Segurança Pública (SUSP), asfixia patrimonial e financeira das facções, controle de armas e oportunidades para a juventude da periferia."
      },
      {
        id: "2C",
        letter: "C",
        text: "Punições bem mais severas: tratar facções criminosas com leis de terrorismo, tirar a redução de pena de quem comete crimes graves e diminuir a idade de responsabilidade penal.",
        candidate: "Flávio Bolsonaro",
        coalition: "PL",
        party: "PL",
        pages: "Páginas 20, 21 e 25",
        tseSummary: "Enquadramento de crimes comuns na Lei Antiterrorismo, extinção de progressão de regime penal e redução da maioridade penal para 16 anos."
      },
      {
        id: "2D",
        letter: "D",
        text: "Desenvolver tecnologias próprias do Brasil para proteger nossos dados digitais e reforçar a fiscalização nas fronteiras para evitar a entrada de armas e drogas.",
        candidate: "Luiz Inácio Lula da Silva",
        coalition: "PT / Coligação Brasil da Esperança",
        party: "PT",
        pages: "Páginas 33, 47 e 48",
        tseSummary: "Soberania em cibersegurança e comando integrado de proteção das fronteiras terrestres e marítimas com PF e Forças Armadas."
      }
    ]
  },
  {
    id: 3,
    tag: "Trabalho e Salário",
    title: "3. Trabalho e Salário",
    question: "Se você fosse presidente, qual seria a sua prioridade principal para quem trabalha?",
    context: "A disputa entre valorização da classe trabalhadora, fim da jornada exaustiva e ganho real versus desregulamentação trabalhista sem amparo da CLT.",
    options: [
      {
        id: "3A",
        letter: "A",
        text: "Garantir direitos trabalhistas para quem atua em plataformas digitais e manter o aumento do salário-mínimo sempre acima da inflação.",
        candidate: "Luiz Inácio Lula da Silva",
        coalition: "PT / Coligação Brasil da Esperança",
        party: "PT",
        pages: "Páginas 11, 18 e 20",
        tseSummary: "Proteção previdenciária e trabalhista para entregadores/motoristas de apps e política permanente de reajuste do salário mínimo com ganho real acima da inflação."
      },
      {
        id: "3B",
        letter: "B",
        text: "Diminuir a jornada semanal de trabalho sem cortar salário e garantir direitos e previdência para quem trabalha com aplicativos de entrega e transporte.",
        candidate: "Luiz Inácio Lula da Silva",
        coalition: "PT / Coligação Brasil da Esperança",
        party: "PT",
        pages: "Páginas 18, 19 e 22",
        tseSummary: "Redução da jornada semanal de trabalho sem redução de salário e inclusão previdenciária de trabalhadores de aplicativos."
      },
      {
        id: "3C",
        letter: "C",
        text: "Ajudar as pessoas a conseguirem vagas no mercado privado, incentivando cursos técnicos e encaminhando quem recebe auxílio do governo para vagas formais de trabalho.",
        candidate: "Flávio Bolsonaro",
        coalition: "PL",
        party: "PL",
        pages: "Páginas 13, 16 e 30",
        tseSummary: "Parcerias de capacitação técnica privada e transição forçada de beneficiários de programas sociais para o mercado."
      },
      {
        id: "3D",
        letter: "D",
        text: "Dar mais liberdade para o trabalhador negociar direto com o patrão sobre como vai trabalhar, sem que as leis rígidas fiquem no caminho.",
        candidate: "Flávio Bolsonaro",
        coalition: "PL",
        party: "PL",
        pages: "Páginas 11, 14 e 17",
        tseSummary: "Aprofundamento da reforma trabalhista, prevalência do acordado individual sobre a CLT e flexibilização irrestrita de jornadas e direitos."
      }
    ]
  },
  {
    id: 4,
    tag: "Meio Ambiente e Comida no Prato",
    title: "4. Meio Ambiente e Comida no Prato",
    question: "Se você fosse presidente, qual seria a sua prioridade principal para o meio ambiente e o campo?",
    context: "A escolha entre soberania alimentar com comida barata e combate ao desmatamento versus favorecimento exclusivo do grande agronegócio de exportação.",
    options: [
      {
        id: "4A",
        letter: "A",
        text: "Proteger as florestas, combater as mudanças do clima e incentivar projetos sustentáveis de produção no campo.",
        candidate: "Luiz Inácio Lula da Silva",
        coalition: "PT / Coligação Brasil da Esperança",
        party: "PT",
        pages: "Páginas 13, 40 e 41",
        tseSummary: "Desmatamento zero, fortalecimento de órgãos de fiscalização (Ibama e ICMBio) e liderança na agenda de preservação climática mundial."
      },
      {
        id: "4B",
        letter: "B",
        text: "Ajudar o produtor rural a renegociar suas dívidas, dar mais crédito e seguro para a lavoura não perder dinheiro com secas ou pragas.",
        candidate: "Flávio Bolsonaro",
        coalition: "PL",
        party: "PL",
        pages: "Páginas 26, 27 e 29",
        tseSummary: "Refinanciamento de passivos do grande agronegócio, securitização de crédito rural e isenções fiscais no campo."
      },
      {
        id: "4C",
        letter: "C",
        text: "Apoiar a agricultura familiar para produzir comida barata, distribuir terras e fazer o governo comprar alimentos dos pequenos produtores para guardar e controlar os preços da feira e mercado.",
        candidate: "Luiz Inácio Lula da Silva",
        coalition: "PT / Coligação Brasil da Esperança",
        party: "PT",
        pages: "Páginas 14, 24 e 25",
        tseSummary: "Plano Safra da Agricultura Familiar (Pronaf recorde), compras públicas e estoques reguladores da Conab para segurar os preços dos alimentos básicos."
      },
      {
        id: "4D",
        letter: "D",
        text: "Aumentar as obras de irrigação onde falta água, ajudar no registro de terras e premiar produtores rurais que cuidam do meio ambiente.",
        candidate: "Flávio Bolsonaro",
        coalition: "PL",
        party: "PL",
        pages: "Páginas 27, 28 e 31",
        tseSummary: "Obras hídricas focadas no agronegócio, titulação de propriedades rurais privadas e pagamento voluntário por serviços ambientais."
      }
    ]
  },
  {
    id: 5,
    tag: "O Brasil e o Mundo",
    title: "5. O Brasil e o Mundo",
    question: "Se você fosse presidente, como você conversaria com os outros países?",
    context: "O contraste entre liderança multilateral soberana do Sul Global e integração regional versus alinhamento automático ideológico a potências externas.",
    options: [
      {
        id: "5A",
        letter: "A",
        text: "Fazer parcerias comerciais pragmáticas e entrar em clubes das maiores economias do mundo para atrair investidores privados de fora.",
        candidate: "Flávio Bolsonaro",
        coalition: "PL",
        party: "PL",
        pages: "Páginas 33, 34 e 36",
        tseSummary: "Prioridade na adesão irrestrita à OCDE, desregulamentações para fundos internacionais e tratados de livre comércio bilaterais."
      },
      {
        id: "5B",
        letter: "B",
        text: "Unir forças com países vizinhos da América do Sul e nações em desenvolvimento para defender o meio ambiente e dar mais força ao Brasil em decisões mundiais.",
        candidate: "Luiz Inácio Lula da Silva",
        coalition: "PT / Coligação Brasil da Esperança",
        party: "PT",
        pages: "Páginas 44, 45 e 46",
        tseSummary: "Integração sul-americana (Mercosul, Unasul), protagonismo no bloco BRICS ampliado e liderança multilateral na governança ambiental e climática."
      },
      {
        id: "5C",
        letter: "C",
        text: "Mudar as regras de organizações internacionais para que países em desenvolvimento tenham a mesma voz e decisão que os países mais ricos.",
        candidate: "Luiz Inácio Lula da Silva",
        coalition: "PT / Coligação Brasil da Esperança",
        party: "PT",
        pages: "Páginas 45 e 46",
        tseSummary: "Reforma urgente da governança global (Conselho de Segurança da ONU, OMC e FMI) contra a assimetria e o protecionismo das nações ricas."
      },
      {
        id: "5D",
        letter: "D",
        text: "Fazer aliança direta e prioritária com países parceiros tradicionais, como Estados Unidos e Israel, buscando vender nossos produtos.",
        candidate: "Flávio Bolsonaro",
        coalition: "PL",
        party: "PL",
        pages: "Páginas 34, 35 e 37",
        tseSummary: "Alinhamento geopolítico automático ao eixo Estados Unidos-Israel, com acordos bilaterais de segurança e livre abertura de mercados."
      }
    ]
  },
  {
    id: 6,
    tag: "Saúde e Cuidado com as Pessoas",
    title: "6. Saúde e Cuidado com as Pessoas",
    question: "Se você fosse presidente, qual seria a sua prioridade principal para a saúde, os serviços sociais e bem-estar?",
    context: "O embate entre fortalecimento do SUS 100% público e gratuito com proteção social versus terceirização, vouchers e privatização da saúde.",
    options: [
      {
        id: "6A",
        letter: "A",
        text: "Regular o uso das redes sociais para proteger crianças e jovens na internet, reforçar os postos de saúde do bairro e o atendimento em casa para os idosos, e reforçar as leis de proteção de animais contra maus-tratos.",
        candidate: "Luiz Inácio Lula da Silva",
        coalition: "PT / Coligação Brasil da Esperança",
        party: "PT",
        pages: "Páginas 28, 35, 36 e 49",
        tseSummary: "Proteção da saúde mental e infantojuvenil em ambientes digitais, ampliação da Saúde da Família nos bairros e política de bem-estar animal."
      },
      {
        id: "6B",
        letter: "B",
        text: "Organizar a saúde com registros no CPF, criar centros de atendimento à mulher e proibir que beneficiários de auxílios usem esse dinheiro em apostas no celular.",
        candidate: "Flávio Bolsonaro",
        coalition: "PL",
        party: "PL",
        pages: "Páginas 8, 22 e 23",
        tseSummary: "Digitalização e integração do cadastro de saúde ao CPF, núcleos de saúde feminina e bloqueio do Bolsa Família para apostas digitais (bets)."
      },
      {
        id: "6C",
        letter: "C",
        text: "Fortalecer a rede de saúde pública, garantir remédios de graça na farmácia popular, moradia digna e apoiar financeiramente estudantes para não largarem a escola.",
        candidate: "Luiz Inácio Lula da Silva",
        coalition: "PT / Coligação Brasil da Esperança",
        party: "PT",
        pages: "Páginas 26, 27, 34 e 37",
        tseSummary: "SUS fortalecido e 100% público, gratuidade total da Farmácia Popular, Minha Casa Minha Vida ampliado e permanência escolar com o programa Pé-de-Meia."
      },
      {
        id: "6D",
        letter: "D",
        text: "Usar hospitais e clínicas privadas em parceria com o SUS para zerar as filas de exames e consultas, e dar cupons para colocar crianças em creches de bairros.",
        candidate: "Flávio Bolsonaro",
        coalition: "PL",
        party: "PL",
        pages: "Páginas 9, 21 e 24",
        tseSummary: "Repasse de recursos públicos para contratação da rede privada de saúde (vouchers/parcerias) e modelo de cupons privados para vagas em creches."
      }
    ]
  },
  {
    id: 7,
    tag: "Relação com os Outros Poderes",
    title: "7. Relação com os Outros Poderes (Judiciário e Legislativo)",
    question: "Se você fosse presidente, qual seria a sua prioridade na relação do Poder Executivo com o Congresso Nacional e o Judiciário?",
    context: "A defesa da estabilidade democrática, separação de poderes e combate ao orçamento secreto versus medidas de controle e retaliação aos tribunais.",
    options: [
      {
        id: "7A",
        letter: "A",
        text: "Fazer uma reforma para acabar com a reeleição de presidente, governadores e prefeitos, além de mudar as leis no Congresso para punir abusos de autoridade no sistema de Justiça.",
        candidate: "Flávio Bolsonaro",
        coalition: "PL",
        party: "PL",
        pages: "Páginas 40, 42 e 45",
        tseSummary: "Proposta de emenda constitucional para extinguir a reeleição no Executivo e ampliação de sanções da Lei de Abuso de Autoridade contra membros do Judiciário e MP."
      },
      {
        id: "7B",
        letter: "B",
        text: "Mudar as regras da Justiça para limitar decisões individuais de ministros do STF, proibir que ex-ministros do governo virem juízes do tribunal imediatamente e proibir parente de magistrado de atuar nos mesmos processos.",
        candidate: "Flávio Bolsonaro",
        coalition: "PL",
        party: "PL",
        pages: "Páginas 38, 39 e 41",
        tseSummary: "Restrição de decisões monocráticas no STF, imposição de quarentena a ex-ministros e combate a impedimentos por parentesco no Judiciário."
      },
      {
        id: "7C",
        letter: "C",
        text: "Fortalecer a democracia, prestar contas de cada centavo gasto aprovado pelos deputados e proteger os tribunais contra ataques ou tentativas de punição política.",
        candidate: "Luiz Inácio Lula da Silva",
        coalition: "PT / Coligação Brasil da Esperança",
        party: "PT",
        pages: "Páginas 21, 22 e 83",
        tseSummary: "Defesa intransigente do Estado Democrático de Direito, combate ao orçamento secreto e proteção das instituições judiciais contra investidas golpistas."
      },
      {
        id: "7D",
        letter: "D",
        text: "Conversar e negociar com o Congresso de forma transparente para decidir onde investir o dinheiro público, respeitando a autonomia dos juízes e da Justiça sem qualquer tipo de interferência do governo.",
        candidate: "Luiz Inácio Lula da Silva",
        coalition: "PT / Coligação Brasil da Esperança",
        party: "PT",
        pages: "Páginas 8, 21 e 82",
        tseSummary: "Diálogo institucional republicano, transparência no orçamento público e preservação estrita da harmonia e independência dos poderes."
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
        heading: "Poder de Compra e Direitos Trabalhistas:",
        text: "Redução da jornada semanal de trabalho sem corte de salário, valorização do salário mínimo acima da inflação todo ano, isenção do Imposto de Renda para rendas mais baixas e direitos previdenciários aos trabalhadores de aplicativo."
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
        text: "Combate rigoroso ao desmatamento com autoridade ambiental recomposta e liderança diplomática soberana junto aos países do Sul Global e fóruns climáticos internacionais."
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
        text: "Flexibilização das normas trabalhistas ('negociado sobre legislado' sem garantias legais), desonerações sem contrapartida social e corte de pelo menos dez ministérios estratégicos."
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
        heading: "Enfraquecimento Institucional e Punitivismo:",
        text: "Foco exclusivo em encarceramento em massa e vigilância, alinhamento ideológico automático a potências externas e iniciativas de enquadramento do Poder Judiciário."
      }
    ]
  }
};
