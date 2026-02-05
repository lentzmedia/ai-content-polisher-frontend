import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../locales/translations';
import {
  Zap, Target, ArrowRight, Check,
  FileText, Mail, Video, Linkedin, Instagram,
  Twitter, Megaphone, ChevronDown, UserPlus, Layers, PenTool,
  Star, Shield
} from 'lucide-react';
import { useState } from 'react';

function LandingPage() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqContent = {
    fr: {
      title: "Questions Fréquentes",
      questions: [
        {
          q: "Comment fonctionne AI Content Polisher concrètement ?",
          a: "Le processus est simple et rapide en 3 étapes : 1) Vous entrez votre idée, texte brut ou contenu existant à reformuler dans notre éditeur. 2) Vous choisissez parmi nos 4 tons optimisés (professionnel, storytelling, engageant, éducatif) et vous sélectionnez les plateformes cibles parmi les 6 disponibles (LinkedIn, Instagram, TikTok, Twitter, Email, Publicité). Bientôt, vous pourrez également créer vos propres styles personnalisés basés sur vos contenus existants. 3) Notre IA génère les versions optimisées uniquement pour les plateformes que vous avez sélectionnées, respectant les bonnes pratiques de chacune : longueur idéale, hashtags pertinents, emojis adaptés, hooks percutants et structures qui maximisent l'engagement. Vous pouvez ensuite éditer, régénérer ou copier directement le contenu."
        },
        {
          q: "Quelle est la différence avec ChatGPT ou d'autres IA génériques ?",
          a: "La différence est majeure. ChatGPT est un assistant généraliste qui produit du texte correct mais générique, sans connaissance des spécificités de chaque réseau social. AI Content Polisher est un outil spécialisé dans le contenu social et marketing, développé par des experts en growth et création de contenu. Notre IA intègre : les algorithmes de chaque plateforme (ce que LinkedIn favorise vs Instagram), les formats qui génèrent le plus d'engagement (carrousels, listes, storytelling...), les hooks et structures psychologiques éprouvés, les bonnes pratiques de longueur, hashtags et emojis par plateforme. Résultat : vous obtenez du contenu prêt à publier qui performe, pas juste du texte à retravailler pendant 30 minutes."
        },
        {
          q: "Mon contenu sera-t-il détecté comme généré par IA ?",
          a: "Soyons transparents : les outils de détection IA (comme GPTZero, Originality.ai, etc.) existent et peuvent parfois identifier du contenu généré par IA. Cependant, plusieurs éléments jouent en votre faveur : notre IA produit du contenu plus naturel et varié que les IA génériques grâce à des prompts spécialisés par plateforme. Nous varions automatiquement les structures et formulations pour éviter les patterns répétitifs facilement détectables. Surtout, nous vous encourageons fortement à personnaliser et éditer le contenu généré - ajoutez vos anecdotes personnelles, votre ton unique, vos expressions favorites. C'est cette touche humaine qui rend le contenu authentique. Bientôt, vous pourrez créer des styles personnalisés basés sur vos propres contenus pour reproduire votre voix. Point important : les plateformes comme LinkedIn, Instagram ou TikTok ne pénalisent pas officiellement le contenu assisté par IA. Ce qui compte pour elles, c'est la valeur apportée à l'audience, pas la méthode de création."
        },
        {
          q: "Est-ce que ça fonctionne vraiment pour augmenter l'engagement ?",
          a: "Soyons honnêtes : personne ne peut garantir qu'un post deviendra viral, et aucune IA ne peut l'assurer. Cependant, AI Content Polisher maximise vos chances de succès en appliquant des techniques éprouvées inspirées des meilleurs créateurs de contenu. Concrètement, notre IA intègre : des hooks d'accroche qui captent l'attention dans les 2 premières secondes (élément crucial pour les algorithmes de toutes les plateformes), des structures narratives qui maintiennent le lecteur engagé jusqu'à la fin du post, des call-to-action psychologiquement optimisés qui encouragent les commentaires et partages, le ratio idéal texte/emojis/hashtags spécifique à chaque plateforme (ce qui fonctionne sur LinkedIn est différent d'Instagram ou TikTok). En structurant efficacement vos idées et en vous fournissant du contenu bien cadré selon les codes de chaque plateforme, notre outil vous aide à créer des posts de qualité professionnelle, plus susceptibles d'engager votre audience cible. Le résultat dépendra toujours de la qualité de votre idée initiale et de votre connaissance de votre audience, mais vous partez avec une longueur d'avance."
        },
        {
          q: "Un crédit = combien de contenus générés ?",
          a: "C'est là que notre système est particulièrement avantageux. Un crédit vous permet de transformer UNE idée en contenus optimisés pour les plateformes de votre choix (LinkedIn, Instagram, TikTok, Twitter, Email, Publicité). Vous sélectionnez les plateformes qui vous intéressent et l'IA génère uniquement ces formats - 1 crédit par génération, quel que soit le nombre de formats choisis. Besoin uniquement de LinkedIn et Instagram ? Sélectionnez-les et obtenez 2 contenus parfaitement optimisés. Vous voulez les 6 ? C'est toujours 1 crédit. C'est un rapport qualité/prix imbattable comparé aux agences ou au temps passé à tout créer manuellement."
        },
        {
          q: "Puis-je annuler mon abonnement à tout moment ?",
          a: "Absolument, sans aucune contrainte. Nous croyons en notre produit et ne voulons pas vous retenir artificiellement. Voici comment ça fonctionne : vous pouvez annuler en 2 clics depuis votre espace compte, à tout moment. Aucun frais d'annulation, aucune pénalité, aucune question embarrassante. Votre accès premium reste actif jusqu'à la fin de votre période de facturation en cours (vous avez payé pour, vous en profitez). Après cette date, vous repassez automatiquement au plan gratuit avec 3 crédits mensuels - vous ne perdez pas votre compte ni votre historique. Si vous changez d'avis, vous pouvez vous réabonner à tout moment."
        },
        {
          q: "Mes données et contenus sont-ils sécurisés ?",
          a: "La sécurité est notre priorité absolue. Voici nos garanties : Chiffrement SSL/TLS pour toutes les communications entre votre navigateur et nos serveurs. Paiements gérés par Stripe, leader mondial certifié PCI-DSS niveau 1 - nous ne voyons et ne stockons jamais vos coordonnées bancaires. Vos contenus ne sont jamais utilisés pour entraîner notre IA ou partagés avec des tiers. Hébergement sur des serveurs européens conformes au RGPD. Vous restez propriétaire à 100% de tous les contenus que vous générez. Possibilité de supprimer votre compte et toutes vos données à tout moment depuis les paramètres."
        }
      ]
    },
    en: {
      title: "Frequently Asked Questions",
      questions: [
        {
          q: "How does AI Content Polisher actually work?",
          a: "The process is simple and fast in 3 steps: 1) You enter your idea, raw text, or existing content to rephrase in our editor. 2) You choose from our 4 optimized tones (professional, storytelling, engaging, educational) and select your target platforms from the 6 available (LinkedIn, Instagram, TikTok, Twitter, Email, Ads). Soon, you'll also be able to create your own custom styles based on your existing content. 3) Our AI generates optimized versions only for the platforms you've selected, following each platform's best practices: ideal length, relevant hashtags, appropriate emojis, compelling hooks, and structures that maximize engagement. You can then edit, regenerate, or directly copy the content."
        },
        {
          q: "What's the difference with ChatGPT or other generic AI?",
          a: "The difference is major. ChatGPT is a generalist assistant that produces correct but generic text, without knowledge of each social network's specifics. AI Content Polisher is a tool specialized in social and marketing content, developed by growth and content creation experts. Our AI integrates: each platform's algorithms (what LinkedIn favors vs Instagram), formats that generate the most engagement (carousels, lists, storytelling...), proven psychological hooks and structures, best practices for length, hashtags, and emojis per platform. Result: you get ready-to-publish content that performs, not just text to rework for 30 minutes."
        },
        {
          q: "Will my content be detected as AI-generated?",
          a: "Let's be transparent: AI detection tools (like GPTZero, Originality.ai, etc.) exist and can sometimes identify AI-generated content. However, several factors work in your favor: our AI produces more natural and varied content than generic AIs thanks to platform-specific prompts. We automatically vary structures and phrasings to avoid easily detectable repetitive patterns. Most importantly, we strongly encourage you to personalize and edit the generated content - add your personal anecdotes, your unique tone, your favorite expressions. It's this human touch that makes content authentic. Soon, you'll be able to create custom styles based on your own content to reproduce your voice. Important point: platforms like LinkedIn, Instagram, or TikTok don't officially penalize AI-assisted content. What matters to them is the value provided to the audience, not the creation method."
        },
        {
          q: "Does it really work to increase engagement?",
          a: "Let's be honest: no one can guarantee that a post will go viral, and no AI can ensure it. However, AI Content Polisher maximizes your chances of success by applying proven techniques inspired by top content creators. Specifically, our AI integrates: attention-grabbing hooks that capture attention in the first 2 seconds (a crucial element for all platform algorithms), narrative structures that keep readers engaged until the end of the post, psychologically optimized call-to-actions that encourage comments and shares, the ideal text/emoji/hashtag ratio specific to each platform (what works on LinkedIn is different from Instagram or TikTok). By effectively structuring your ideas and providing well-framed content according to each platform's codes, our tool helps you create professional-quality posts that are more likely to engage your target audience. The result will always depend on the quality of your initial idea and your knowledge of your audience, but you start with a head start."
        },
        {
          q: "One credit = how many generated contents?",
          a: "This is where our system is particularly advantageous. One credit allows you to transform ONE idea into optimized content for the platforms of your choice (LinkedIn, Instagram, TikTok, Twitter, Email, Ads). You select the platforms you want and the AI generates only those formats - 1 credit per generation, regardless of how many formats you choose. Only need LinkedIn and Instagram? Select them and get 2 perfectly optimized contents. Want all 6? Still just 1 credit. That's unbeatable value compared to agencies or the time spent creating everything manually."
        },
        {
          q: "Can I cancel my subscription at any time?",
          a: "Absolutely, without any constraints. We believe in our product and don't want to artificially retain you. Here's how it works: you can cancel in 2 clicks from your account space, at any time. No cancellation fees, no penalties, no awkward questions. Your premium access stays active until the end of your current billing period (you paid for it, you enjoy it). After that date, you automatically return to the free plan with 3 monthly credits - you don't lose your account or your history. If you change your mind, you can resubscribe at any time."
        },
        {
          q: "Are my data and content secure?",
          a: "Security is our absolute priority. Here are our guarantees: SSL/TLS encryption for all communications between your browser and our servers. Payments handled by Stripe, the global leader certified PCI-DSS Level 1 - we never see or store your bank details. Your content is never used to train our AI or shared with third parties. Hosting on European servers compliant with GDPR. You remain 100% owner of all content you generate. Ability to delete your account and all your data at any time from settings."
        }
      ]
    }
  };

  const faq = faqContent[language] || faqContent.fr;

  const formats = [
    { name: 'LinkedIn', icon: Linkedin, color: '#0A66C2' },
    { name: 'Instagram', icon: Instagram, color: '#E4405F' },
    { name: 'TikTok', icon: Video, color: '#000000' },
    { name: 'Twitter / X', icon: Twitter, color: '#000000' },
    { name: 'Email', icon: Mail, color: '#EA4335' },
    { name: 'Publicité', icon: Megaphone, color: '#F59E0B' }
  ];

  const testimonials = language === 'fr' ? [
    { name: 'Sophie M.', role: 'Content Manager', text: "J'utilise l'outil depuis 2 mois et la qualité des posts générés est vraiment au-dessus de ce que je faisais avec ChatGPT. Le gain de temps est réel.", rating: 5 },
    { name: 'Thomas L.', role: 'Freelance Marketing', text: "Le fait de pouvoir générer pour plusieurs plateformes en un clic, c'est exactement ce qui me manquait. Je recommande.", rating: 5 },
    { name: 'Julie R.', role: 'Community Manager', text: "Les hooks générés sont pertinents et les structures de posts correspondent bien aux codes de chaque réseau. Bon rapport qualité/prix.", rating: 4 },
    { name: 'Marc D.', role: 'Entrepreneur', text: "Outil simple et efficace. Je l'utilise principalement pour LinkedIn et les emails. Les résultats sont convaincants.", rating: 5 },
    { name: 'Léa B.', role: 'Social Media Manager', text: "Enfin un outil qui comprend la différence entre un post LinkedIn et un caption Instagram. Les 4 tons disponibles couvrent bien les besoins.", rating: 4 },
    { name: 'Antoine P.', role: 'CEO Startup', text: "On a intégré l'outil dans notre workflow d'équipe. La fonctionnalité team est pratique et les crédits partagés simplifient la gestion.", rating: 5 }
  ] : [
    { name: 'Sophie M.', role: 'Content Manager', text: "I've been using the tool for 2 months and the quality of generated posts is really above what I was doing with ChatGPT. The time savings are real.", rating: 5 },
    { name: 'Thomas L.', role: 'Freelance Marketer', text: "Being able to generate for multiple platforms in one click is exactly what I was missing. I recommend it.", rating: 5 },
    { name: 'Julie R.', role: 'Community Manager', text: "The generated hooks are relevant and post structures match each network's codes well. Good value for money.", rating: 4 },
    { name: 'Marc D.', role: 'Entrepreneur', text: "Simple and effective tool. I mainly use it for LinkedIn and emails. Results are convincing.", rating: 5 },
    { name: 'Lea B.', role: 'Social Media Manager', text: "Finally a tool that understands the difference between a LinkedIn post and an Instagram caption. The 4 available tones cover needs well.", rating: 4 },
    { name: 'Antoine P.', role: 'Startup CEO', text: "We integrated the tool into our team workflow. The team feature is practical and shared credits simplify management.", rating: 5 }
  ];

  return (
    <div className="bg-white">
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-sm font-medium px-4 py-2 rounded-full mb-8 border border-orange-100">
                <Zap className="h-3.5 w-3.5" />
                {t.landing.hero.badge}
              </div>

              <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                {t.landing.hero.title1}{' '}
                <span className="text-orange-500">{t.landing.hero.title2}</span>{' '}
                {t.landing.hero.title3}
              </h1>

              <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-lg">
                {t.landing.hero.subtitle}
                <span className="text-gray-900 font-medium">{t.landing.hero.subtitleBold}</span>
              </p>

              {/* Stats row */}
              <div className="mt-8 flex items-center gap-6 sm:gap-8">
                {[
                  { value: t.landing.stats.formats, label: t.landing.stats.formatsDesc },
                  { value: t.landing.stats.speed, label: t.landing.stats.speedDesc },
                  { value: t.landing.stats.languages, label: t.landing.stats.languagesDesc }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-6 sm:gap-8">
                    {i > 0 && <div className="w-px h-10 bg-gray-200" />}
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-gray-400 mt-0.5">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-orange-500 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
                >
                  {t.landing.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/join-team"
                  className="inline-flex items-center justify-center px-6 py-4 text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <UserPlus className="mr-2 h-5 w-5" />
                  {language === 'fr' ? 'Rejoindre une équipe' : 'Join a team'}
                </Link>
              </div>

              {/* Social proof */}
              <div className="mt-8 flex items-center gap-4">
                {/* Avatar stack */}
                <div className="flex -space-x-2">
                  {['bg-blue-500', 'bg-emerald-500', 'bg-orange-500', 'bg-pink-500', 'bg-violet-500'].map((bg, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full ${bg} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                      {['S', 'T', 'J', 'M', 'L'][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {language === 'fr' ? 'Aucune carte de crédit requise' : 'No credit card required'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right - App preview */}
            <div className="hidden lg:block relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/60 p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-100">
                  <div className="w-11 h-11 rounded-xl bg-orange-500 flex items-center justify-center">
                    <PenTool className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">AI Content Polisher</div>
                    <div className="text-xs text-gray-400">{t.polisher.generating}</div>
                  </div>
                  <div className="ml-auto flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                  </div>
                </div>

                {/* Fake content lines */}
                <div className="space-y-3 mb-6">
                  <div className="h-2.5 bg-gray-100 rounded-full w-full" />
                  <div className="h-2.5 bg-gray-100 rounded-full w-[92%]" />
                  <div className="h-2.5 bg-gray-100 rounded-full w-[78%]" />
                </div>

                {/* Fake generated cards */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { icon: Linkedin, label: 'LinkedIn', color: '#0A66C2' },
                    { icon: Instagram, label: 'Instagram', color: '#E4405F' },
                    { icon: Video, label: 'TikTok', color: '#000' },
                    { icon: Twitter, label: 'Twitter', color: '#000' }
                  ].map((p, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <div className="w-7 h-7 rounded flex items-center justify-center" style={{ backgroundColor: p.color }}>
                        <p.icon className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-700">{p.label}</div>
                        <div className="h-1.5 bg-gray-200 rounded-full w-12 mt-1" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Fake button */}
                <div className="h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">{language === 'fr' ? 'Copier le contenu' : 'Copy content'}</span>
                </div>
              </div>

              {/* Background shapes */}
              <div className="absolute -top-10 -right-10 w-80 h-80 bg-orange-50 rounded-full -z-0" />
              <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-blue-50 rounded-full -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PLATFORMS STRIP ==================== */}
      <section className="py-10 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            {formats.map((format, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-gray-400 hover:text-gray-600 transition-colors">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center opacity-80"
                  style={{ backgroundColor: format.color }}
                >
                  <format.icon className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium">{format.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">
              {language === 'fr' ? 'Comment ça marche' : 'How it works'}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              {t.landing.howItWorks.title}
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              {t.landing.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { step: '1', title: t.landing.howItWorks.step1Title, desc: t.landing.howItWorks.step1Desc, icon: FileText, color: 'bg-orange-500' },
              { step: '2', title: t.landing.howItWorks.step2Title, desc: t.landing.howItWorks.step2Desc, icon: Target, color: 'bg-blue-600' },
              { step: '3', title: t.landing.howItWorks.step3Title, desc: t.landing.howItWorks.step3Desc, icon: Zap, color: 'bg-emerald-500' }
            ].map((item, idx) => (
              <div key={idx} className="relative text-center group">
                {/* Connector line */}
                {idx < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-gray-200" />
                )}
                <div className="relative inline-flex mb-6">
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 w-7 h-7 bg-white border-2 border-gray-200 text-gray-900 rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">
              {language === 'fr' ? 'Fonctionnalités' : 'Features'}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              {t.landing.features.title}
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              {t.landing.features.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Zap, title: t.landing.features.feature1Title, desc: t.landing.features.feature1Desc, color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-100' },
              { icon: Target, title: t.landing.features.feature2Title, desc: t.landing.features.feature2Desc, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
              { icon: Layers, title: t.landing.features.feature3Title, desc: t.landing.features.feature3Desc, color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-100' },
              { icon: Shield, title: t.landing.features.feature4Title, desc: t.landing.features.feature4Desc, color: 'text-violet-500', bg: 'bg-violet-50', border: 'border-violet-100' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div className={`w-12 h-12 ${feature.bg} border ${feature.border} rounded-xl flex items-center justify-center mb-5`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-[0.95rem]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FORMATS DETAIL ==================== */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">
              {language === 'fr' ? '6 plateformes' : '6 platforms'}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              {t.landing.formats.subtitle}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: 'LinkedIn Post', icon: Linkedin, color: '#0A66C2', desc: t.landing.formats.linkedin },
              { name: 'Instagram Caption', icon: Instagram, color: '#E4405F', desc: t.landing.formats.instagram },
              { name: 'Script TikTok', icon: Video, color: '#000000', desc: t.landing.formats.tiktok },
              { name: 'Tweet / Thread', icon: Twitter, color: '#000000', desc: t.landing.formats.twitter },
              { name: 'Email Pro', icon: Mail, color: '#EA4335', desc: t.landing.formats.email },
              { name: 'Publicité', icon: Megaphone, color: '#F59E0B', desc: t.landing.formats.copywriting }
            ].map((format, idx) => (
              <div key={idx} className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div
                  className="w-11 h-11 rounded-lg flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: format.color }}
                >
                  <format.icon className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-gray-900 mb-0.5">{format.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{format.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">
              {language === 'fr' ? 'Témoignages' : 'Testimonials'}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              {language === 'fr' ? "Ce qu'en pensent nos utilisateurs" : 'What our users think'}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < t.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-[0.95rem] leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center text-white text-sm font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section id="faq" className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              {faq.title}
            </h2>
          </div>

          <div className="space-y-3">
            {faq.questions.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-8 text-[0.95rem]">{item.q}</span>
                    <ChevronDown className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
                    <div className="px-6 pb-6 text-gray-500 leading-relaxed text-[0.95rem]">{item.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl px-8 sm:px-14 py-16 sm:py-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/10 rounded-full -mr-24 -mt-24" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-orange-500/10 rounded-full -ml-20 -mb-20" />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                {t.landing.finalCta.title}
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
                {t.landing.finalCta.subtitle}
              </p>

              <Link
                to="/register"
                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-gray-900 bg-orange-400 rounded-xl hover:bg-orange-300 transition-colors shadow-lg"
              >
                {t.landing.finalCta.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-gray-400 text-sm">
                {[t.landing.finalCta.feature1, t.landing.finalCta.feature2, t.landing.finalCta.feature3].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-400" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
