"use client";

import { useState } from "react";

type Capability = {
  id: string;
  title: string;
  summary: string;
  highlights: { label: string; detail: string }[];
  example: {
    title: string;
    description: string;
    steps: string[];
    impact: string;
  };
};

const CAPABILITIES: Capability[] = [
  {
    id: "conversation",
    title: "Живое общение",
    summary:
      "Поддерживаю разговор на русском и английском, помогаю кратко формулировать мысли, уточнять детали и сохранять конструктивный тон.",
    highlights: [
      {
        label: "Адаптивные ответы",
        detail: "Подбираю стиль под собеседника: от формального до дружеского.",
      },
      {
        label: "Контекст",
        detail: "Помню детали диалога, чтобы развивать тему без повторов.",
      },
      {
        label: "Оптимизация",
        detail: "Помогаю сокращать тексты, выделять главные мысли и улучшать структуру.",
      },
    ],
    example: {
      title: "Подготовка серии писем",
      description:
        "Маркетинговая команда хотела автоматизировать ответы клиентам. Я помог собрать краткие и точные шаблоны.",
      steps: [
        "Выяснил тон бренда и целевые сценарии общения.",
        "Сформировал три шаблона писем с переменными под персонализацию.",
        "Предложил варианты A/B тестирования и метрики эффективности.",
      ],
      impact:
        "Команда сократила время подготовки ответов на 60% и увеличила конверсию в повторные обращения.",
    },
  },
  {
    id: "engineering",
    title: "Инженерное мышление",
    summary:
      "Проектирую архитектуру, пишу код, предлагаю тесты и автоматизацию. Люблю структурировать требования.",
    highlights: [
      {
        label: "Проектирование",
        detail: "Определяю ключевые модули, интерфейсы и зоны ответственности.",
      },
      {
        label: "Чистый код",
        detail: "Пишу понятные компоненты, добавляю комментарии, предлагаю улучшения.",
      },
      {
        label: "Тестовое покрытие",
        detail: "Советую сценарии проверки и настройки CI/CD.",
      },
    ],
    example: {
      title: "Автоматизация аналитики продаж",
      description:
        "Для ритейл-компании я собрал пайплайн, который очищает данные и строит отчёты в дашборде.",
      steps: [
        "Спроектировал ETL-процесс и схему базы данных.",
        "Написал модульные функции очистки и агрегации данных.",
        "Создал панель с предупреждениями и рекомендациями по запасам.",
      ],
      impact:
        "Дашборд обновляется автоматически, а менеджеры экономят ~8 часов в неделю на ручной аналитике.",
    },
  },
  {
    id: "research",
    title: "Аналитика и исследования",
    summary:
      "Перевожу разрозненные источники в инсайты: структурирую информацию, помогаю принять решения и подготовить презентации.",
    highlights: [
      {
        label: "Синтез данных",
        detail: "Собираю данные из документов, таблиц и заметок в единую картину.",
      },
      {
        label: "Визуализация",
        detail: "Подсказываю, какие диаграммы и форматы лучше раскрывают историю.",
      },
      {
        label: "Презентации",
        detail: "Помогаю создавать логичную структуру и готовые спикерские заметки.",
      },
    ],
    example: {
      title: "Продуктовая стратегия",
      description:
        "Стартап изучал рынок EdTech. Я собрал сравнительный анализ конкурентов и помог сформулировать стратегию выхода.",
      steps: [
        "Выделил ключевые сегменты и потребности пользователей.",
        "Проанализировал позиционирование конкурентов и ценообразование.",
        "Подготовил дорожную карту MVP и метрики успеха.",
      ],
      impact:
        "Команда утвердила стратегию за один созвон и запустила пилот за шесть недель.",
    },
  },
];

export function CapabilitiesRotator() {
  const [activeCapabilityId, setActiveCapabilityId] = useState(CAPABILITIES[0].id);
  const activeCapability =
    CAPABILITIES.find((capability) => capability.id === activeCapabilityId) ??
    CAPABILITIES[0];

  return (
    <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/60 p-8 backdrop-blur dark:border-white/5 dark:bg-white/5 sm:grid-cols-[minmax(0,280px)_1fr] sm:p-10">
      <div className="flex flex-col gap-4">
        <span className="rounded-full bg-zinc-800 px-4 py-1 text-xs uppercase tracking-[0.2em] text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900">
          Возможности
        </span>
        <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
          Чем могу быть полезен
        </h2>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          Нажмите на раздел, чтобы узнать, как я решаю задачи в разных направлениях.
        </p>
        <div className="flex flex-col gap-2">
          {CAPABILITIES.map((capability) => {
            const isActive = capability.id === activeCapability.id;
            return (
              <button
                key={capability.id}
                type="button"
                onClick={() => setActiveCapabilityId(capability.id)}
                className={`rounded-2xl border px-4 py-3 text-left transition-all ${
                  isActive
                    ? "border-transparent bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600 text-white shadow-lg shadow-orange-500/30"
                    : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400 dark:border-white/10 dark:bg-transparent dark:text-zinc-200 dark:hover:border-white/30"
                }`}
              >
                <p className="text-sm font-semibold">{capability.title}</p>
                <p
                  className={`mt-1 text-xs leading-relaxed ${
                    isActive ? "text-white/90" : "text-zinc-500 dark:text-zinc-400"
                  }`}
                >
                  {capability.summary}
                </p>
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-xl shadow-zinc-800/5 dark:border-white/10 dark:bg-black/40">
        <div>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            {activeCapability.example.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {activeCapability.example.description}
          </p>
        </div>
        <div className="space-y-3">
          {activeCapability.example.steps.map((step, index) => (
            <div
              key={step}
              className="flex gap-4 rounded-2xl border border-zinc-100 bg-white/90 p-4 text-sm shadow-sm shadow-zinc-900/5 dark:border-white/10 dark:bg-black/50"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-purple-600 text-xs font-semibold text-white">
                {index + 1}
              </span>
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-200">
                {step}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-orange-200/60 bg-gradient-to-r from-orange-100 via-rose-100 to-purple-100 p-4 text-sm text-orange-900 dark:border-orange-500/30 dark:from-orange-500/10 dark:via-rose-500/10 dark:to-purple-500/10 dark:text-orange-100">
          <span className="font-semibold">Результат:</span>{" "}
          {activeCapability.example.impact}
        </div>
      </div>
    </div>
  );
}
