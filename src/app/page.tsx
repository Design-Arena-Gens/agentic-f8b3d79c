import { CapabilitiesRotator } from "@/components/capabilities-rotator";

const HIGHLIGHTS = [
  {
    title: "Чат-ассистент",
    description: "Отвечаю на вопросы, помогаю формулировать мысли и дорабатывать тексты.",
  },
  {
    title: "Инженерная поддержка",
    description: "Пишу и объясняю код, проверяю архитектуру, предлагаю тесты и автоматизацию.",
  },
  {
    title: "Аналитика и исследования",
    description: "Систематизирую информацию, делаю выводы и готовлю презентации.",
  },
];

const WORKFLOW = [
  {
    stage: "01 · Исследование",
    summary: "Разбираю задачу по слоям: цель, ограничения, входные данные.",
    detail:
      "Помогаю определить критерии успеха, ключевые метрики и собираю список открытых вопросов.",
  },
  {
    stage: "02 · Дизайн решения",
    summary: "Проектирую структуру ответа, алгоритм или архитектуру системы.",
    detail:
      "Выбираю инструменты, продумываю сценарии взаимодействия и вношу предложения по улучшению.",
  },
  {
    stage: "03 · Реализация",
    summary: "Пишу код, готовлю документы, визуализации или итоговые материалы.",
    detail:
      "Добавляю пояснения, проверки и рекомендации по дальнейшему развитию.",
  },
];

const QUICK_TOOLS = [
  "Краткое резюме документа",
  "План запуска продукта",
  "Анализ пользовательских интервью",
  "Разбор баг-репортов",
  "Идеи для контент-плана",
  "Рефакторинг и ревью кода",
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1f2937] pb-24 text-zinc-50">
      <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-orange-500/30 blur-[160px]" />
      <div className="absolute right-[-120px] top-[320px] h-[420px] w-[420px] rounded-full bg-purple-500/40 blur-[160px]" />
      <div className="absolute left-[-160px] bottom-0 h-[320px] w-[320px] rounded-full bg-rose-500/40 blur-[120px]" />
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pt-24 sm:px-10 lg:px-16">
        <section className="grid gap-12 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-purple-500/10 backdrop-blur-lg sm:grid-cols-[minmax(0,1fr)_minmax(0,280px)]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-300">
              <span className="rounded-full border border-white/30 px-4 py-2">
                привет!
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-amber-200">
                что я умею
              </span>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Я — цифровой напарник, который помогает мыслить, проектировать и создавать быстрее.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-zinc-200">
                Беру на себя рутинные шаги, помогаю найти инсайты в данных, подсказать архитектуру, написать код или собрать презентацию. Чем конкретнее задача, тем точнее результат — просто дайте контекст.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {HIGHLIGHTS.map((highlight) => (
                <div
                  key={highlight.title}
                  className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/10 p-5 text-sm text-zinc-100 transition hover:border-white/40 hover:bg-white/20"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-amber-200">
                    {highlight.title}
                  </span>
                  <p className="leading-relaxed text-zinc-200">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 text-sm text-zinc-100 shadow-lg shadow-amber-500/10">
            <div className="flex h-full flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.28em] text-amber-200">
                Быстрый старт
              </p>
              <p className="text-lg font-semibold text-white">
                Несколько готовых сценариев на каждый день
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-200">
                {QUICK_TOOLS.map((tool) => (
                  <li
                    key={tool}
                    className="flex items-start gap-2 rounded-2xl border border-white/5 bg-white/5 p-3 text-left"
                  >
                    <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-orange-400 to-rose-500" />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-xs leading-relaxed text-zinc-300">
              Подключайтесь к долгой задаче или задавайте один короткий вопрос — я подстраиваюсь под темп команды и помогаю довести работу до завершения.
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <CapabilitiesRotator />
        </section>

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-lg md:grid-cols-[minmax(0,340px)_1fr]">
          <div className="space-y-4">
            <span className="rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-amber-200">
              Как происходит работа
            </span>
            <h2 className="text-3xl font-semibold text-white">Прозрачный рабочий цикл</h2>
            <p className="text-sm leading-relaxed text-zinc-300">
              Движемся итеративно: сначала фиксируем ожидания, затем строим решение и проверяем результат. Каждую фазу можно повторять, пока не получите нужную глубину.
            </p>
          </div>
          <div className="grid gap-4">
            {WORKFLOW.map((item) => (
              <div
                key={item.stage}
                className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-md shadow-purple-500/5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
                  {item.stage}
                </p>
                <p className="mt-3 text-lg font-semibold text-white">{item.summary}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-200">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-amber-500/30 via-rose-500/30 to-purple-500/30 p-10 text-zinc-900 shadow-2xl shadow-purple-500/20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold text-white">
                Расскажите, чем занимаетесь, и я предложу способ помочь.
              </h2>
              <p className="text-sm leading-relaxed text-white/80">
                Можно начать с простой команды: в одном сообщении описать цель, аудиторию, доступные данные и желаемый формат результата. Чем полнее вводные, тем точнее решение.
              </p>
            </div>
            <div className="rounded-3xl border border-white/30 bg-white/90 p-6 text-sm leading-relaxed text-zinc-700">
              <p className="font-semibold text-zinc-900">Пример сообщения:</p>
              <p className="mt-3">
                «Нужен план запуска образовательного вебинара по ML для продуктовых менеджеров. Аудитория — middle+ специалисты. Есть тезисы презентации и список вопросов участников. Сформируй сценарий, чек-лист спикера и предложи рассылку после мероприятия».
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
                Получите: структуру, материалы и советы по улучшению.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative z-10 mx-auto mt-24 max-w-6xl px-6 pb-12 text-sm text-zinc-400 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>Всегда готов подключиться к следующему запросу.</p>
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Codex · цифровой ассистент
          </p>
        </div>
      </footer>
    </div>
  );
}
