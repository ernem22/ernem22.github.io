/* ──────────────────────────────────────────────────────────────
   Single source of truth: window.DATA.
   Loaded as a plain script (not fetched) so the site also works
   from the filesystem (file://) with no server. Edit values here.

   Facts live once, in `site`. Any string anywhere below can use them
   as {tokens}: {name} {role} {based} {timezone} {email} {since}
   {available}, plus a few worked out from them:
     {first}          first name, lower-case ("eren")
     {years}          years since {since}
     {offset}         {timezone}'s UTC offset today ("UTC+3")
     {availableMonth} a date as "January 2027", or the availability text unchanged
     {projectYears}   span of the projects' years ("2022–2025")
   After editing, `npm run build` copies site.meta into index.html's
   <head> (for link previews, which don't run JS) and re-minifies.
   ────────────────────────────────────────────────────────────── */
window.DATA = {
  "site": {
    "name": "Eren Macit",
    "role": "Full Stack Developer",
    "based": "Istanbul",
    "timezone": "Europe/Istanbul",
    "since": 2019,
    "email": "ernmctt@gmail.com",
    "available": "Everytime",
    "github": {
      "user": "ernem22",
      "topic": "portfolio",
      "limit": 100,
      "includeForks": false
    },
    "meta": {
      "lang": "en",
      "title": "{name} — {role}",
      "description": "{name} is a software developer living in {based}. He loves trying new things; when it comes to aesthetics and details, however, he’s dangerously meticulous. An obsession with perfection? It’s like a bad superpower.",
      "themeColor": "#eadfcb",
      "favicon": "assets/favicon.svg",
      "og": {
        "type": "website",
        "description": "{role} in {based} — dangerously meticulous about aesthetics and details.",
        "image": "https://ernem22.github.io/assets/og.jpg",
        "imageWidth": 1200,
        "imageHeight": 630
      },
      "twitterCard": "summary_large_image"
    },
    "ui": {
      "expand": "Expand",
      "close": "Close section (Esc)",
      "closeNote": "Close note",
      "usedIn": "Used in",
      "sections": "Sections",
      "prevSection": "Previous section",
      "nextSection": "Next section",
      "yr": "yr",
      "yrs": "yrs",
      "copy": "Copy",
      "copied": "Copied",
      "copyFallback": "Press ⌘/Ctrl + C",
      "soon": "Link coming soon",
      "grid": "Layout grid",
      "hintGrid": "grid",
      "hintNav": "sections",
      "hintClose": "close",
      "cols": "cols",
      "dailyDriver": "main stack",
      "whenFits": "used before",
      "environment": "environment",
      "showTake": "Show details",
      "loading": "loading",
      "ready": "ready"
    }
  },
  "panels": [
    {
      "id": "p-info",
      "corner": "tl",
      "scene": {
        "kind": "info",
        "chips": [
          "hello, world",
          "<me />",
          ":)"
        ],
        "bubble": "hi!"
      },
      "face": {
        "title": "Info",
        "teaser": "Full Stack Developer, shipping interfaces from {based} since {since}.",
        "label": "Open Info"
      },
      "detail": {
        "title": "Info",
        "symbol": ":)",
        "path": "~/profile",
        "layout": "info",
        "content": {
          "lead": "{role} building fast, accessible interfaces — and the design systems behind them.",
          "copy": "{years} years on the part of the web people actually touch. I care about render performance, components that work with a keyboard and a screen reader, typed APIs other developers enjoy, and motion that stays off the main thread. Independent since 2023, working with product teams that want their front-end to feel as good as the Figma file.",
          "stats": [
            {
              "label": "Years shipping",
              "value": "{years}",
              "unit": "yrs"
            },
            {
              "label": "Launches",
              "value": "38"
            },
            {
              "label": "Median LCP",
              "value": "1.1",
              "unit": "s"
            },
            {
              "label": "GitHub stars",
              "value": "1.2",
              "unit": "k"
            }
          ],
          "code": {
            "file": "profile.ts",
            "lang": "TypeScript",
            "caption": "Profile as code",
            "lines": [
              [
                {
                  "t": "k",
                  "v": "export const"
                },
                {
                  "t": "plain",
                  "v": " "
                },
                {
                  "t": "v",
                  "v": "{first}"
                },
                {
                  "t": "plain",
                  "v": " = {"
                }
              ],
              [
                {
                  "t": "plain",
                  "v": "  role: "
                },
                {
                  "t": "s",
                  "v": "\"{role}\""
                },
                {
                  "t": "plain",
                  "v": ","
                }
              ],
              [
                {
                  "t": "plain",
                  "v": "  based: "
                },
                {
                  "t": "s",
                  "v": "\"{based} · {offset}\""
                },
                {
                  "t": "plain",
                  "v": ","
                }
              ],
              [
                {
                  "t": "plain",
                  "v": "  focus: ["
                },
                {
                  "t": "s",
                  "v": "\"design systems\""
                },
                {
                  "t": "plain",
                  "v": ", "
                },
                {
                  "t": "s",
                  "v": "\"performance\""
                },
                {
                  "t": "plain",
                  "v": ", "
                },
                {
                  "t": "s",
                  "v": "\"a11y\""
                },
                {
                  "t": "plain",
                  "v": ", "
                },
                {
                  "t": "s",
                  "v": "\"motion\""
                },
                {
                  "t": "plain",
                  "v": "],"
                }
              ],
              [
                {
                  "t": "plain",
                  "v": "  stack: ["
                },
                {
                  "t": "s",
                  "v": "\"TypeScript\""
                },
                {
                  "t": "plain",
                  "v": ", "
                },
                {
                  "t": "s",
                  "v": "\"React\""
                },
                {
                  "t": "plain",
                  "v": ", "
                },
                {
                  "t": "s",
                  "v": "\"Svelte\""
                },
                {
                  "t": "plain",
                  "v": ", "
                },
                {
                  "t": "s",
                  "v": "\"WebGL\""
                },
                {
                  "t": "plain",
                  "v": "],"
                }
              ],
              [
                {
                  "t": "plain",
                  "v": "  offline: ["
                },
                {
                  "t": "s",
                  "v": "\"browser internals\""
                },
                {
                  "t": "plain",
                  "v": ", "
                },
                {
                  "t": "s",
                  "v": "\"type design\""
                },
                {
                  "t": "plain",
                  "v": ", "
                },
                {
                  "t": "s",
                  "v": "\"espresso\""
                },
                {
                  "t": "plain",
                  "v": "],"
                }
              ],
              [
                {
                  "t": "plain",
                  "v": "  available: "
                },
                {
                  "t": "k",
                  "v": "new"
                },
                {
                  "t": "plain",
                  "v": " "
                },
                {
                  "t": "t",
                  "v": "Date"
                },
                {
                  "t": "plain",
                  "v": "("
                },
                {
                  "t": "s",
                  "v": "\"{available}\""
                },
                {
                  "t": "plain",
                  "v": "),"
                }
              ],
              [
                {
                  "t": "plain",
                  "v": "} "
                },
                {
                  "t": "k",
                  "v": "satisfies"
                },
                {
                  "t": "plain",
                  "v": " "
                },
                {
                  "t": "t",
                  "v": "Developer"
                },
                {
                  "t": "plain",
                  "v": ";"
                }
              ]
            ]
          },
          "experience": {
            "label": "Experience",
            "items": [
              {
                "period": "2023–now",
                "current": true,
                "role": "Independent Front-end Developer",
                "place": "Lisbon · remote",
                "desc": "Design systems, performance audits and product builds."
              },
              {
                "period": "2020–2023",
                "current": false,
                "role": "Senior Front-end Engineer",
                "place": "Halden, Copenhagen",
                "desc": "Led a platform team of six; 40+ apps onto one library, LCP 3.8s → 1.4s."
              },
              {
                "period": "2018–2020",
                "current": false,
                "role": "Front-end Developer",
                "place": "Sillage Studio, Paris",
                "desc": "Interactive campaigns and WebGL product configurators."
              },
              {
                "period": "2016–2018",
                "current": false,
                "role": "Junior Developer",
                "place": "Northfold, Porto",
                "desc": "Editorial platforms and a first design system."
              }
            ]
          },
          "lists": [
            {
              "label": "Open source & talks",
              "items": [
                {
                  "text": "motion-kit — compositor-only UI transitions",
                  "meta": "author · 1.2k ★"
                },
                {
                  "text": "“Animating off the main thread”",
                  "meta": "Lisbon JS, 2025"
                },
                {
                  "text": "Contributions to Vite, Radix & Astro",
                  "meta": "2021–now"
                }
              ]
            }
          ]
        }
      }
    },
    {
      "id": "p-projects",
      "corner": "tr",
      "scene": {
        "kind": "projects",
        "chips": [
          "Deploy",
          "✓ Shipped"
        ]
      },
      "face": {
        "title": "Projects",
        "teaser": "Products, systems and open‑source tools, {projectYears}.",
        "label": "Open Projects"
      },
      "detail": {
        "title": "Projects",
        "symbol": "↗",
        "path": "~/projects",
        "layout": "projects",
        "content": {
          "projects": [
            {
              "name": "Ledger UI",
              "type": "Design system",
              "year": "2025",
              "kind": "Design system · 2025",
              "mock": {
                "type": "ledger",
                "columns": [
                  "Prop",
                  "Type",
                  "Default"
                ],
                "url": "ledger.tessera.dev/components/button",
                "nav": [
                  "Ledger",
                  "Foundations",
                  "Tokens",
                  "Button",
                  "Input",
                  "Select",
                  "Dialog",
                  "Toast"
                ],
                "heading": "Button",
                "buttons": [
                  {
                    "t": "Transfer",
                    "v": "pri"
                  },
                  {
                    "t": "Schedule",
                    "v": "sec"
                  },
                  {
                    "t": "Cancel",
                    "v": "gho"
                  },
                  {
                    "t": "Freeze card",
                    "v": "dan"
                  }
                ],
                "sizes": [
                  {
                    "t": "Small",
                    "v": "pri sm"
                  },
                  {
                    "t": "Medium",
                    "v": "pri"
                  },
                  {
                    "t": "Large",
                    "v": "pri lg"
                  },
                  {
                    "t": "Loading",
                    "v": "pri load",
                    "spin": true
                  }
                ],
                "tokens": [
                  [
                    "ink",
                    "#1f2a44"
                  ],
                  [
                    "brand",
                    "#3553d1"
                  ],
                  [
                    "soft",
                    "#8fa2f0"
                  ],
                  [
                    "surface",
                    "#e8ecf7"
                  ],
                  [
                    "danger",
                    "#c2413a"
                  ]
                ],
                "code": "<Button variant=\"primary\" size=\"md\">",
                "props": [
                  {
                    "name": "variant",
                    "type": "\"primary\" | \"secondary\" | \"ghost\" | \"danger\"",
                    "def": "\"primary\""
                  },
                  {
                    "name": "size",
                    "type": "\"sm\" | \"md\" | \"lg\"",
                    "def": "\"md\""
                  },
                  {
                    "name": "loading",
                    "type": "boolean",
                    "def": "false"
                  },
                  {
                    "name": "asChild",
                    "type": "boolean",
                    "def": "false"
                  },
                  {
                    "name": "icon",
                    "type": "ReactNode",
                    "def": "—"
                  }
                ]
              },
              "desc": "A token-driven design system shipped as a typed React library, used by 14 product teams at Tessera Bank. Themeable at runtime, documented in Storybook, and tested against WCAG 2.2 AA in CI on every pull request.",
              "links": [
                {
                  "label": "Live ↗",
                  "href": "#"
                },
                {
                  "label": "Case study ↗",
                  "href": "#"
                }
              ],
              "meta": [
                {
                  "label": "Role",
                  "text": "Lead front-end, API design"
                },
                {
                  "label": "Stack",
                  "text": "React, TypeScript, Radix, Vanilla Extract, Storybook"
                },
                {
                  "label": "Impact",
                  "text": "86 components · 14 teams · 0 axe violations"
                }
              ]
            },
            {
              "name": "Pulse",
              "type": "Real-time dashboard",
              "year": "2024",
              "kind": "Real-time dashboard · 2024",
              "mock": {
                "type": "pulse",
                "url": "pulse.halcyon.health/study/218/night-30",
                "tiles": [
                  {
                    "label": "Heart rate",
                    "value": "58",
                    "unit": "bpm"
                  },
                  {
                    "label": "SpO₂",
                    "value": "97",
                    "unit": "%"
                  },
                  {
                    "label": "Stage",
                    "value": "N3"
                  },
                  {
                    "label": "Stream",
                    "value": "Live",
                    "live": true
                  }
                ],
                "axis": [
                  "02:10",
                  "02:20",
                  "02:30",
                  "02:40",
                  "02:50"
                ]
              },
              "desc": "Real-time monitoring for 30-night sleep studies. Streams 256 Hz signals over WebSockets, decodes them in a Web Worker and draws them on canvas at 60 fps without ever blocking input.",
              "links": [
                {
                  "label": "Case study ↗",
                  "href": "#"
                }
              ],
              "meta": [
                {
                  "label": "Role",
                  "text": "Front-end lead, data visualisation"
                },
                {
                  "label": "Stack",
                  "text": "React, TypeScript, D3, Web Workers, WebSocket"
                },
                {
                  "label": "Impact",
                  "text": "12 streams at 60 fps · review time −40%"
                }
              ]
            },
            {
              "name": "Vessel & Kiln",
              "type": "Headless storefront",
              "year": "2023",
              "kind": "Headless storefront · 2023",
              "mock": {
                "type": "vessel",
                "url": "vesselandkiln.com/shop",
                "brand": "VESSEL & KILN",
                "menu": "Shop · Archive · Studio",
                "bag": "Bag (1)",
                "items": [
                  {
                    "cls": "p1",
                    "name": "Tea bowl N°214",
                    "price": "€68"
                  },
                  {
                    "cls": "p2",
                    "name": "Jug, ash glaze",
                    "price": "€120"
                  },
                  {
                    "cls": "p3",
                    "name": "Plate set",
                    "price": "€94"
                  }
                ],
                "scores": [
                  {
                    "value": "100",
                    "label": "Perf"
                  },
                  {
                    "value": "100",
                    "label": "A11y"
                  },
                  {
                    "value": "100",
                    "label": "Best"
                  },
                  {
                    "value": "98",
                    "label": "SEO"
                  }
                ]
              },
              "desc": "Rebuilt a slow, theme-based shop as a headless storefront with streamed server rendering and edge caching. Median LCP went from 4.1s to 0.9s and conversion rose 23% in the first quarter.",
              "links": [
                {
                  "label": "Live ↗",
                  "href": "#"
                }
              ],
              "meta": [
                {
                  "label": "Role",
                  "text": "Solo front-end, architecture"
                },
                {
                  "label": "Stack",
                  "text": "Next.js, Shopify Storefront API, Edge caching"
                },
                {
                  "label": "Impact",
                  "text": "LCP 0.9s · CLS 0 · conversion +23%"
                }
              ]
            },
            {
              "name": "motion-kit",
              "type": "Open-source library",
              "year": "2025",
              "kind": "Open-source library · 2025",
              "mock": {
                "type": "code",
                "url": "flip.ts — motion-kit",
                "lines": [
                  {
                    "n": "1",
                    "tokens": [
                      {
                        "c": "k",
                        "t": "import"
                      },
                      {
                        "t": " { flip } "
                      },
                      {
                        "c": "k",
                        "t": "from"
                      },
                      {
                        "t": " "
                      },
                      {
                        "c": "s",
                        "t": "\"motion-kit\""
                      },
                      {
                        "t": ";"
                      }
                    ]
                  },
                  {
                    "n": "2",
                    "tokens": []
                  },
                  {
                    "n": "3",
                    "tokens": [
                      {
                        "c": "k",
                        "t": "const"
                      },
                      {
                        "t": " card = document."
                      },
                      {
                        "c": "f",
                        "t": "querySelector"
                      },
                      {
                        "t": "("
                      },
                      {
                        "c": "s",
                        "t": "\".card\""
                      },
                      {
                        "t": ");"
                      }
                    ]
                  },
                  {
                    "n": "4",
                    "tokens": []
                  },
                  {
                    "n": "5",
                    "tokens": [
                      {
                        "c": "f",
                        "t": "flip"
                      },
                      {
                        "t": "(card, () => card.classList."
                      },
                      {
                        "c": "f",
                        "t": "toggle"
                      },
                      {
                        "t": "("
                      },
                      {
                        "c": "s",
                        "t": "\"open\""
                      },
                      {
                        "t": "), {"
                      }
                    ]
                  },
                  {
                    "n": "6",
                    "tokens": [
                      {
                        "t": "  duration: "
                      },
                      {
                        "c": "m",
                        "t": "600"
                      },
                      {
                        "t": ","
                      }
                    ]
                  },
                  {
                    "n": "7",
                    "tokens": [
                      {
                        "t": "  easing: "
                      },
                      {
                        "c": "s",
                        "t": "\"cubic-bezier(.2, 0, 0, 1)\""
                      },
                      {
                        "t": ","
                      }
                    ]
                  },
                  {
                    "n": "8",
                    "tokens": [
                      {
                        "t": "  interruptible: "
                      },
                      {
                        "c": "m",
                        "t": "true"
                      },
                      {
                        "t": ","
                      }
                    ]
                  },
                  {
                    "n": "9",
                    "tokens": [
                      {
                        "t": "});"
                      }
                    ]
                  }
                ],
                "term": [
                  "$ npm i motion-kit",
                  "+ motion-kit@2.4.0 · 3.1 kB gzip · 0 deps"
                ]
              },
              "desc": "A 3 kB library for interruptible, compositor-only UI transitions: FLIP, springs and shared-element transitions behind a tiny, typed API. It grew out of client work and now runs in production at a few dozen companies.",
              "links": [
                {
                  "label": "GitHub ↗",
                  "href": "#"
                },
                {
                  "label": "Docs ↗",
                  "href": "#"
                }
              ],
              "meta": [
                {
                  "label": "Role",
                  "text": "Author, maintainer"
                },
                {
                  "label": "Stack",
                  "text": "TypeScript, Web Animations API, Vitest"
                },
                {
                  "label": "Impact",
                  "text": "1.2k ★ · 9k weekly downloads"
                }
              ]
            },
            {
              "name": "Tidewater",
              "type": "WebGL archive",
              "year": "2022",
              "kind": "WebGL archive · 2022",
              "mock": {
                "type": "tide",
                "url": "tidewater.archive/explore",
                "label": "TIDEWATER",
                "records": "4,012 records",
                "from": "1890",
                "to": "2025",
                "selected": "1974"
              },
              "desc": "An interactive archive of 4,000 tidal records rendered in WebGL. Visitors scrub through a century of coastline at 60 fps, even on mid-range phones, with a fully accessible table view as a fallback.",
              "links": [
                {
                  "label": "Live ↗",
                  "href": "#"
                },
                {
                  "label": "Case study ↗",
                  "href": "#"
                }
              ],
              "meta": [
                {
                  "label": "Role",
                  "text": "Front-end, WebGL, accessibility"
                },
                {
                  "label": "Stack",
                  "text": "Astro, Three.js, GLSL, Sanity"
                },
                {
                  "label": "Impact",
                  "text": "60 fps on mid-range · Lighthouse 98"
                }
              ]
            }
          ]
        }
      }
    },
    {
      "id": "p-tech",
      "corner": "bl",
      "scene": {
        "kind": "tech",
        "icons": [
          "react",
          "typescript",
          "vite",
          "css3"
        ],
        "chips": [
          "$ npm run dev",
          "✓ 0 errors"
        ],
        "file": "stack.tsx",
        "dims": "hug × hug"
      },
      "face": {
        "title": "Techstack",
        "teaser": "Languages, frameworks and tooling I ship with.",
        "label": "Open Techstack"
      },
      "detail": {
        "title": "Techstack",
        "symbol": "</>",
        "path": "~/stack",
        "layout": "tech",
        "content": {
          "status": {
            "core": "main",
            "more": "used before",
            "env": "environment"
          },
          "hint": "Tap a tile for details"
        }
      }
    },
    {
      "id": "p-contact",
      "corner": "br",
      "scene": {
        "kind": "contact",
        "messages": [
          "got a project in mind?"
        ],
        "sent": "Let’s build something",
        "receipt": "✓✓ seen"
      },
      "face": {
        "title": "Contact",
        "teaser": "Taking on contract work from {availableMonth}.",
        "label": "Open Contact"
      },
      "detail": {
        "title": "Contact",
        "symbol": "@",
        "path": "~/contact",
        "layout": "contact",
        "content": {
          "email": {
            "label": "Email",
            "address": "{email}"
          },
          "clock": {
            "label": "Local time — {based}",
            "note": "{offset} · overlaps with Europe all day, US East until 18:00."
          },
          "socials": {
            "label": "Elsewhere",
            "items": [
              {
                "name": "GitHub",
                "handle": "@ernem22",
                "href": "https://github.com/ernem22"
              },
              {
                "name": "LinkedIn",
                "handle": "/in/erenmacit",
                "href": "#"
              },
              {
                "name": "Medium",
                "handle": "@elian.dev",
                "href": "#"
              },
              {
                "name": "Resume",
                "handle": "PDF · 2 pages",
                "href": "#",
                "arrow": "↓"
              }
            ]
          },
          "availability": {
            "label": "Availability",
            "before": "Open to contract work from",
            "date": "{availableMonth}",
            "after": "— design systems, performance audits, or building the product alongside your team.",
            "terms": [
              {
                "label": "Engagement",
                "value": "6–16 weeks"
              },
              {
                "label": "Commitment",
                "value": "3–5 days / week"
              }
            ]
          },
          "briefs": {
            "label": "Start a brief",
            "items": [
              {
                "subject": "Design system"
              },
              {
                "subject": "Performance audit"
              },
              {
                "subject": "Product build"
              },
              {
                "subject": "Workshop / talk"
              }
            ],
            "note": "Replies within 48 hours. Async-friendly — I write things down."
          }
        }
      }
    }
  ],
  "tech": [
    { "id": "html5", "name": "HTML", "tier": 1, "d": "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z", "c": "#E34F26" },
    { "id": "javascript", "name": "JavaScript", "tier": 1, "d": "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z", "c": "#F7DF1E" },
    { "id": "typescript", "name": "TypeScript", "tier": 1, "d": "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z", "c": "#3178C6" },
    { "id": "java", "name": "Java", "tier": 1, "d": "M11.803 24.745s-1.224.713.869.952c2.536.292 3.833.251 6.625-.281c0 0 .733.464 1.76.865c-6.265 2.683-14.177-.161-9.255-1.536zm-.767-3.5s-1.375 1.015.719 1.228c2.715.281 4.849.308 8.552-.405c0 0 .511.516 1.319.801c-7.573 2.213-16.011.172-10.589-1.624zm6.453-5.942c1.541 1.776-.407 3.375-.407 3.375s3.917-2.027 2.12-4.557c-1.681-2.365-2.973-3.536 4.005-7.584c0 0-10.953 2.735-5.719 8.767zm8.282 12.036s.907.744-.995 1.323c-3.615 1.093-15.047 1.421-18.224.041c-1.14-.495 1-1.187 1.672-1.328c.703-.156 1.104-.124 1.104-.124c-1.271-.896-8.208 1.755-3.525 2.515c12.776 2.073 23.285-.932 19.968-2.427m-13.38-9.724s-5.817 1.38-2.063 1.88c1.589.213 4.751.167 7.699-.083c2.405-.204 4.823-.636 4.823-.636s-.849.364-1.464.787c-5.907 1.552-17.317.828-14.031-.76c2.776-1.339 5.036-1.188 5.036-1.188m10.432 5.833c6-3.125 3.224-6.12 1.292-5.713c-.475.093-.688.183-.688.183s.172-.277.511-.396c3.833-1.349 6.781 3.973-1.235 6.083c0-.005.095-.083.12-.156zM19.203 0s3.324 3.323-3.156 8.437c-5.192 4.104-1.183 6.443 0 9.115c-3.031-2.735-5.255-5.14-3.765-7.38C14.474 6.875 20.542 5.281 19.203 0m-6.224 31.901c5.761.364 14.609-.208 14.824-2.932c0 0-.407 1.031-4.767 1.853c-4.916.927-10.984.817-14.583.224c0 0 .74.609 4.525.855z", "c": "#007396", "vb": "0 0 32 32" },
    { "id": "csharp", "name": "C#", "tier": 1, "d": "M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z", "c": "#512BD4" },
    { "id": "angular", "name": "Angular", "tier": 1, "d": "M16.712 17.711H7.288l-1.204 2.916L12 24l5.916-3.373-1.204-2.916ZM14.692 0l7.832 16.855.814-12.856L14.692 0ZM9.308 0 .662 3.999l.814 12.856L9.308 0Zm-.405 13.93h6.198L12 6.396 8.903 13.93Z", "c": "#0F0F11" },
    { "id": "react", "name": "React", "tier": 1, "d": "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z", "c": "#61DAFB" },
    { "id": "redux", "name": "Redux", "tier": 1, "d": "M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z", "c": "#764ABC" },
    { "id": "radixui", "name": "Radix UI", "tier": 1, "d": "M11.52 24a7.68 7.68 0 0 1-7.68-7.68 7.68 7.68 0 0 1 7.68-7.68V24Zm0-24v7.68H3.84V0h7.68Zm4.8 7.68a3.84 3.84 0 1 1 0-7.68 3.84 3.84 0 0 1 0 7.68Z", "c": "#161618" },
    { "id": "sass", "name": "Sass", "tier": 1, "d": "M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z", "c": "#CC6699" },
    { "id": "shadcnui", "name": "shadcn/ui", "tier": 1, "d": "M22.219 11.784 11.784 22.219c-.407.407-.407 1.068 0 1.476.407.407 1.068.407 1.476 0L23.695 13.26c.407-.408.407-1.069 0-1.476-.408-.407-1.069-.407-1.476 0ZM20.132.305.305 20.132c-.407.407-.407 1.068 0 1.476.408.407 1.069.407 1.476 0L21.608 1.781c.407-.407.407-1.068 0-1.476-.408-.407-1.069-.407-1.476 0Z", "c": "#000000" },
    { "id": "css3", "name": "CSS", "tier": 1, "d": "M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63", "c": "#663399" },
    { "id": "tailwindcss", "name": "Tailwind CSS", "tier": 1, "d": "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z", "c": "#06B6D4" },
    { "id": "dotnet", "name": ".NET", "tier": 1, "d": "M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z", "c": "#512BD4" },
    { "id": "springboot", "name": "Spring Boot", "tier": 1, "d": "m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942H7.2725c-.819 0-1.8308.5836-2.2402 1.2942L.307 10.7058c-.4095.7106-.4095 1.873 0 2.5837l4.7252 8.189c.4094.7107 1.4166 1.2943 2.2402 1.2943h9.455c.819 0 1.826-.5836 2.2402-1.2942l4.7252-8.189c.4095-.7107.4095-1.8732 0-2.5838zM10.9763 5.7547c0-.5365.4377-.9742.9742-.9742s.9742.4377.9742.9742v5.8217c0 .5366-.4377.9742-.9742.9742s-.9742-.4376-.9742-.9742zm.9742 12.4294c-3.6427 0-6.6077-2.965-6.6077-6.6077.0047-2.0896.993-4.0521 2.6685-5.304a.8657.8657 0 0 1 1.2142.1788.8657.8657 0 0 1-.1788 1.2143c-2.1602 1.6048-2.612 4.6592-1.0072 6.8194 1.6049 2.1603 4.6593 2.612 6.8195 1.0072 1.2378-.9177 1.9673-2.372 1.9673-3.9157a4.8972 4.8972 0 0 0-1.9861-3.925c-.386-.2824-.466-.8284-.1836-1.2143.2824-.386.8283-.466 1.2143-.1835 1.6895 1.2471 2.6826 3.2238 2.6873 5.3228 0 3.6474-2.965 6.6077-6.6077 6.6077z", "c": "#6DB33F" },
    { "id": "drizzle", "name": "Drizzle ORM", "tier": 1, "d": "M5.353 11.823a1.036 1.036 0 0 0-.395-1.422 1.063 1.063 0 0 0-1.437.399L.138 16.702a1.035 1.035 0 0 0 .395 1.422 1.063 1.063 0 0 0 1.437-.398l3.383-5.903Zm11.216 0a1.036 1.036 0 0 0-.394-1.422 1.064 1.064 0 0 0-1.438.399l-3.382 5.902a1.036 1.036 0 0 0 .394 1.422c.506.283 1.15.104 1.438-.398l3.382-5.903Zm7.293-4.525a1.036 1.036 0 0 0-.395-1.422 1.062 1.062 0 0 0-1.437.399l-3.383 5.902a1.036 1.036 0 0 0 .395 1.422 1.063 1.063 0 0 0 1.437-.399l3.383-5.902Zm-11.219 0a1.035 1.035 0 0 0-.394-1.422 1.064 1.064 0 0 0-1.438.398l-3.382 5.903a1.036 1.036 0 0 0 .394 1.422c.506.282 1.15.104 1.438-.399l3.382-5.902Z", "c": "#C5F74F" },
    { "id": "postgresql", "name": "PostgreSQL", "tier": 1, "d": "M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z", "c": "#4169E1" },
    { "id": "sqlite", "name": "SQLite", "tier": 1, "d": "M21.678.521c-1.032-.92-2.28-.55-3.513.544a8.71 8.71 0 0 0-.547.535c-2.109 2.237-4.066 6.38-4.674 9.544.237.48.422 1.093.544 1.561a13.044 13.044 0 0 1 .164.703s-.019-.071-.096-.296l-.05-.146a1.689 1.689 0 0 0-.033-.08c-.138-.32-.518-.995-.686-1.289-.143.423-.27.818-.376 1.176.484.884.778 2.4.778 2.4s-.025-.099-.147-.442c-.107-.303-.644-1.244-.772-1.464-.217.804-.304 1.346-.226 1.478.152.256.296.698.422 1.186.286 1.1.485 2.44.485 2.44l.017.224a22.41 22.41 0 0 0 .056 2.748c.095 1.146.273 2.13.5 2.657l.155-.084c-.334-1.038-.47-2.399-.41-3.967.09-2.398.642-5.29 1.661-8.304 1.723-4.55 4.113-8.201 6.3-9.945-1.993 1.8-4.692 7.63-5.5 9.788-.904 2.416-1.545 4.684-1.931 6.857.666-2.037 2.821-2.912 2.821-2.912s1.057-1.304 2.292-3.166c-.74.169-1.955.458-2.362.629-.6.251-.762.337-.762.337s1.945-1.184 3.613-1.72C21.695 7.9 24.195 2.767 21.678.521m-18.573.543A1.842 1.842 0 0 0 1.27 2.9v16.608a1.84 1.84 0 0 0 1.835 1.834h9.418a22.953 22.953 0 0 1-.052-2.707c-.006-.062-.011-.141-.016-.2a27.01 27.01 0 0 0-.473-2.378c-.121-.47-.275-.898-.369-1.057-.116-.197-.098-.31-.097-.432 0-.12.015-.245.037-.386a9.98 9.98 0 0 1 .234-1.045l.217-.028c-.017-.035-.014-.065-.031-.097l-.041-.381a32.8 32.8 0 0 1 .382-1.194l.2-.019c-.008-.016-.01-.038-.018-.053l-.043-.316c.63-3.28 2.587-7.443 4.8-9.791.066-.069.133-.128.198-.194Z", "c": "#003B57" },
    { "id": "zod", "name": "Zod", "tier": 1, "d": "M2.584 3.582a2.247 2.247 0 0 1 2.112-1.479h14.617c.948 0 1.794.595 2.115 1.487l2.44 6.777a2.248 2.248 0 0 1-.624 2.443l-9.61 8.52a2.247 2.247 0 0 1-2.963.018L.776 12.773a2.248 2.248 0 0 1-.64-2.467Zm12.038 4.887-9.11 5.537 5.74 5.007c.456.399 1.139.396 1.593-.006l5.643-5.001H14.4l6.239-3.957c.488-.328.69-.947.491-1.5l-1.24-3.446a1.535 1.535 0 0 0-1.456-1.015H5.545a1.535 1.535 0 0 0-1.431 1.01l-1.228 3.37z", "c": "#408AFF" },
    { "id": "playwright", "name": "Playwright", "tier": 1, "d": "M23.996 7.462c-.056.837-.257 2.135-.716 3.85-.995 3.715-4.27 10.874-10.42 9.227-6.15-1.65-5.407-9.487-4.412-13.201.46-1.716.934-2.94 1.305-3.694.42-.853.846-.289 1.815.523.684.573 2.41 1.791 5.011 2.488 2.601.697 4.706.506 5.583.352 1.245-.219 1.897-.494 1.834.455Zm-9.807 3.863s-.127-1.819-1.773-2.286c-1.644-.467-2.613 1.04-2.613 1.04Zm4.058 4.539-7.769-2.172s.446 2.306 3.338 3.153c2.862.836 4.43-.98 4.43-.981Zm2.701-2.51s-.13-1.818-1.773-2.286c-1.644-.469-2.612 1.038-2.612 1.038ZM8.57 18.23c-4.749 1.279-7.261-4.224-8.021-7.08C.197 9.831.044 8.832.003 8.188c-.047-.73.455-.52 1.415-.354.677.118 2.3.261 4.308-.28a11.28 11.28 0 0 0 2.41-.956c-.058.197-.114.4-.17.61-.433 1.618-.827 4.055-.632 6.426-1.976.732-2.267 2.423-2.267 2.423l2.524-.715c.227 1.002.6 1.987 1.15 2.838a5.914 5.914 0 0 1-.171.049Zm-4.188-6.298c1.265-.333 1.363-1.631 1.363-1.631l-3.374.888s.745 1.076 2.01.743Z", "c": "#2EAD33" },
    { "id": "vite", "name": "Vite", "tier": 1, "d": "M13.056 23.238a.57.57 0 0 1-1.02-.355v-5.202c0-.63-.512-1.143-1.144-1.143H5.148a.57.57 0 0 1-.464-.903l3.777-5.29c.54-.753 0-1.804-.93-1.804H.57a.574.574 0 0 1-.543-.746.6.6 0 0 1 .08-.157L5.008.78a.57.57 0 0 1 .467-.24h14.589a.57.57 0 0 1 .466.903l-3.778 5.29c-.54.755 0 1.806.93 1.806h5.745c.238 0 .424.138.513.322a.56.56 0 0 1-.063.603z", "c": "#9135FF" },
    { "id": "postman", "name": "Postman", "tier": 1, "d": "M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z", "c": "#FF6C37" },
    { "id": "bun", "name": "Bun", "tier": 1, "d": "M12 22.596c6.628 0 12-4.338 12-9.688 0-3.318-2.057-6.248-5.219-7.986-1.286-.715-2.297-1.357-3.139-1.89C14.058 2.025 13.08 1.404 12 1.404c-1.097 0-2.334.785-3.966 1.821a49.92 49.92 0 0 1-2.816 1.697C2.057 6.66 0 9.59 0 12.908c0 5.35 5.372 9.687 12 9.687v.001ZM10.599 4.715c.334-.759.503-1.58.498-2.409 0-.145.202-.187.23-.029.658 2.783-.902 4.162-2.057 4.624-.124.048-.199-.121-.103-.209a5.763 5.763 0 0 0 1.432-1.977Zm2.058-.102a5.82 5.82 0 0 0-.782-2.306v-.016c-.069-.123.086-.263.185-.172 1.962 2.111 1.307 4.067.556 5.051-.082.103-.23-.003-.189-.126a5.85 5.85 0 0 0 .23-2.431Zm1.776-.561a5.727 5.727 0 0 0-1.612-1.806v-.014c-.112-.085-.024-.274.114-.218 2.595 1.087 2.774 3.18 2.459 4.407a.116.116 0 0 1-.049.071.11.11 0 0 1-.153-.026.122.122 0 0 1-.022-.083 5.891 5.891 0 0 0-.737-2.331Zm-5.087.561c-.617.546-1.282.76-2.063 1-.117 0-.195-.078-.156-.181 1.752-.909 2.376-1.649 2.999-2.778 0 0 .155-.118.188.085 0 .304-.349 1.329-.968 1.874Zm4.945 11.237a2.957 2.957 0 0 1-.937 1.553c-.346.346-.8.565-1.286.62a2.178 2.178 0 0 1-1.327-.62 2.955 2.955 0 0 1-.925-1.553.244.244 0 0 1 .064-.198.234.234 0 0 1 .193-.069h3.965a.226.226 0 0 1 .19.07c.05.053.073.125.063.197Zm-5.458-2.176a1.862 1.862 0 0 1-2.384-.245 1.98 1.98 0 0 1-.233-2.447c.207-.319.503-.566.848-.713a1.84 1.84 0 0 1 1.092-.11c.366.075.703.261.967.531a1.98 1.98 0 0 1 .408 2.114 1.931 1.931 0 0 1-.698.869v.001Zm8.495.005a1.86 1.86 0 0 1-2.381-.253 1.964 1.964 0 0 1-.547-1.366c0-.384.11-.76.32-1.079.207-.319.503-.567.849-.713a1.844 1.844 0 0 1 1.093-.108c.367.076.704.262.968.534a1.98 1.98 0 0 1 .4 2.117 1.932 1.932 0 0 1-.702.868Z", "c": "#000000" },
    { "id": "docker", "name": "Docker", "tier": 1, "d": "M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z", "c": "#2496ED" },
    { "id": "hermes", "name": "Hermes", "tier": 1, "d": "M5.938 12.835c.127-.039.285.02.373.143c.028.038.036.092.046.14c.003.014-.02.033-.04.05q-.184-.146-.354-.291c-.011-.01-.016-.027-.025-.042m2.458-3.423c.195-.032.39-.06.588-.05a.5.5 0 0 1 .148.026q.303.107.601.224c.028.01.05.036.075.055l-.013.027a9 9 0 0 1-.26-.089c-.115-.038-.213-.077-.315-.098c-.25-.05-.25-.046-.292-.014l.574.144q.413.207.823.417c.042.022.09.057.107.098c.026.06.063.076.117.072c.066-.006.132-.017.213-.027l-.04.086c.051.08.142.02.216.064c-.074.13-.247.09-.334.199l.061.074l-.12.087c0 .106-.038.168-.306.243l.026.085l-.196.042l.07.124h-.25l-.007.137l-.244-.027l-.053.123c-.027-.008-.052-.011-.073-.023c-.067-.038-.128-.056-.195.006c-.019.017-.063.014-.093.008c-.026-.006-.05-.029-.07-.042c-.11.095-.11.095-.208.003c-.057.046-.12.074-.186.011c-.063.027-.123-.02-.178-.014c-.07.007-.097-.035-.133-.07l-.13.033c-.013-.236-.194-.19-.34-.203c.005-.072.05-.092.095-.094a.5.5 0 0 1 .159.022c.164.05.32.12.496.138c.203.021.405.029.601-.015c.265-.059.52-.149.707-.365c.049-.056.083-.127.117-.195c.019-.038.02-.084-.02-.116a1.4 1.4 0 0 0-.382-.217c.024.12-.031.182-.115.221c0 .014-.004.025 0 .03c.08.115.084.16-.007.267a1.4 1.4 0 0 1-.218.211a.477.477 0 0 1-.641-.05a1.4 1.4 0 0 1-.133-.152c-.078-.107-.076-.108-.033-.236c-.165-.08-.128-.226-.104-.364c.008-.05.028-.096.049-.163c-.04.014-.067.017-.087.032a.9.9 0 0 0-.316.357c-.007.016-.01.034-.02.047c-.012.015-.034.038-.045.035c-.02-.006-.037-.027-.05-.045c-.008-.012-.007-.032-.012-.057h-.126l.053-.172l-.039-.049l.11-.284c-.06.026-.091.044-.124.051c-.03.007-.064 0-.095 0c0-.031-.01-.07.004-.092c.149-.22.305-.428.593-.476 M8.06 10.788c-.003-.038-.004-.075.037-.062c.016.006.034.048.028.067c-.01.04-.038.032-.064-.005z M11.981.009q.34-.017.679 0c.247.01.495.024.74.062q.602.097 1.19.273c.463.138.92.299 1.356.511a7.3 7.3 0 0 1 2.948 2.642q.436.704.739 1.479c.219.556.446 1.11.623 1.683c.204.654.329 1.326.458 1.997c.097.504.182 1.01.29 1.511c.156.722.329 1.44.494 2.16c.186.812.4 1.615.63 2.415c.102.355.193.713.282 1.072c.11.436.202.876.254 1.323c.031.278.066.557.073.837a8 8 0 0 1-.017.88c-.037.413-.1.818-.226 1.212a5 5 0 0 1-.915 1.649l-.13.156l.018.023c.043-.023.088-.041.127-.068c.2-.138.373-.307.531-.49c.4-.46.721-.973.975-1.529a3.6 3.6 0 0 0 .325-1.72c-.024-.424-.097-.834-.3-1.213c-.013-.027-.015-.06-.03-.121c.05.035.082.048.101.072c.107.13.22.258.315.398c.33.494.46 1.052.486 1.64a3.75 3.75 0 0 1-.47 1.97c-.36.655-.887 1.14-1.526 1.506c-.193.111-.394.21-.595.308c-.157.078-.248.211-.318.365a.52.52 0 0 0-.033.406a.4.4 0 0 1 .013.139c-.005.077-.077.155-.14.162c-.054.006-.125-.043-.15-.116a1.2 1.2 0 0 1-.06-.233c-.04-.314-.155-.6-.308-.87a3.9 3.9 0 0 0-.73-.91a2.1 2.1 0 0 0-.897-.524a4 4 0 0 0-.692-.131c-.075-.008-.15-.04-.22.01c.18.06.363.11.538.18c.434.173.82.43 1.18.728c.308.255.58.543.794.884c.098.155.186.315.227.496c.027.123.042.25.067.375q.021.092-.053.144c-.047.033-.122.034-.163-.01a.5.5 0 0 1-.08-.14c-.03-.073-.038-.159-.078-.225a7.3 7.3 0 0 0-1.423-1.664c-.16-.137-.329-.26-.537-.323c-.376-.114-.753-.203-1.15-.154c-.213.025-.427.032-.64.053a1.6 1.6 0 0 0-.736.278a5 5 0 0 0-.834.72c-.329.342-.642.699-.955 1.055c-.136.155-.264.319-.314.531l-.012.051a.096.096 0 0 1-.09.076h-.31c-.046 0-.082-.048-.072-.094q.033-.162.07-.324c.075-.325.19-.635.368-.917c.024-.039.04-.088.104-.08l.01.049l.027.077c.28-.435.571-.834.996-1.135c.283-.204.584-.378.89-.55a.2.2 0 0 0-.098-.002c-.162.043-.325.084-.485.134c-.402.124-.764.33-1.11.566c-.147.1-.298.193-.414.333a7.3 7.3 0 0 0-1.07 1.767a1 1 0 0 0-.04.12a.075.075 0 0 1-.072.056h-.494c-.04 0-.062-.051-.036-.082c.123-.14.246-.282.377-.415c.275-.281.58-.532.777-.884c.027-.048.063-.09.095-.135c.238-.333.54-.607.818-.902c.082-.086.175-.16.26-.24q.042-.042.079-.085l-.018-.025l-.135.041q-.053.023-.102.05c-.248.144-.494.292-.743.433c-.408.23-.825.439-1.209.711c-.281.2-.591.358-.889.533c-.02.012-.044.015-.08.028c-.015-.135.143-.201.108-.336c-.033.014-.064.02-.085.038c-.111.096-.227.19-.328.296c-.148.157-.284.325-.425.488q-.188.214-.373.431A.15.15 0 0 1 9.89 24H8.762l.016-.042c.028-.09.085-.172.083-.28c-.091-.018-.162.001-.212.077a5 5 0 0 0-.136.215c-.01.016-.024.03-.042.03h-.093c-.019 0-.029-.022-.017-.037q.106-.133.209-.268c.001-.002-.006-.012-.012-.024q-.022.004-.045.013q-.264.135-.527.274a.4.4 0 0 1-.168.042H5.202c-.026 0-.039-.036-.019-.053a3 3 0 0 0 .558-.605c.335-.496.538-1.047.667-1.629c.004-.02-.003-.043-.006-.091c-.037.048-.059.072-.076.1a2 2 0 0 1-.334.415c-.28.258-.59.448-.983.464c-.297.012-.588 0-.865-.127c-.46-.21-.722-.57-.794-1.072c-.025-.17-.017-.171-.182-.219A3.5 3.5 0 0 1 1.97 20.6a2.3 2.3 0 0 1-.808-1.13a3.6 3.6 0 0 1-.16-1.245c.002-.034.016-.067.024-.1c.032.023.046.043.05.066c.033.153.059.308.096.46q.128.534.516.92c.258.256.571.419.91.532c.358.118.717.138 1.07-.016a1.9 1.9 0 0 0 .621-.452c.328-.348.533-.76.648-1.223c.009-.034.005-.071.007-.11c-.015.006-.026.006-.03.011q-.048.075-.093.152A2.7 2.7 0 0 1 3.625 19.6c-.351.17-.718.255-1.11.159a1.6 1.6 0 0 1-.971-.64a2 2 0 0 1-.368-.924a2.9 2.9 0 0 1 .02-.886c.05-.439.466-1.17.742-1.271c-.02.063-.035.112-.053.16c-.043.116-.097.227-.13.345a1.9 1.9 0 0 0-.05.82c.033.212.09.416.204.6c.147.236.346.407.62.465c.11.023.225.014.338.018a.58.58 0 0 0 .386-.131a1.2 1.2 0 0 0 .366-.481c.168-.375.24-.777.309-1.179q.074-.444.133-.893c.039-.281.071-.563.104-.845c.026-.232.048-.464.074-.696l.076-.683q.036-.34.069-.683l.034-.42l.037-.417q.031-.375.065-.748c.008-.082-.02-.132-.09-.177a2.5 2.5 0 0 1-.492-.418c-.1-.109-.188-.228-.282-.342c-.035-.042-.056-.097-.116-.118a2.1 2.1 0 0 0 .275.597c.06.092.131.176.196.265c.063.086.182.115.234.226c-.028.003-.046.01-.06.006a5 5 0 0 1-.22-.057a2.7 2.7 0 0 1-1.287-.819c-.435-.487-.656-1.076-.71-1.723a5.2 5.2 0 0 1 .014-1.06q.106-.905.45-1.745c.155-.376.338-.741.526-1.102c.205-.393.466-.75.765-1.076c.512-.559 1.104-1.024 1.726-1.448a12.8 12.8 0 0 1 2.277-1.233A11 11 0 0 1 9.31.494c.655-.166 1.31-.33 1.982-.415c.229-.03.458-.058.688-.07zm-1.847 22.82c-.07.06-.147.111-.207.18c-.238.27-.464.549-.668.869l-.044.108a.2.2 0 0 0 .093-.057c.174-.19.351-.378.519-.574c.104-.122.195-.255.288-.386c.024-.034.03-.08.046-.12zm1.65-3.695a5.5 5.5 0 0 0-.653.593l-.37.386a.96.96 0 0 1-.377.25a1.4 1.4 0 0 1-.467.09c-.044 0-.087.006-.151.012c.028.058.043.097.064.131l.45.724c.136.22.276.438.399.666c.068.125.105.267.156.404c.077.027.14-.018.202-.048q.435-.204.867-.412c.213-.101.437-.186.636-.31c.347-.215.68-.455 1.018-.685c.015-.01.026-.028.042-.046c-.023-.019-.038-.037-.056-.044c-.287-.111-.527-.3-.77-.482a5 5 0 0 1-.506-.42a1.8 1.8 0 0 1-.41-.653c-.019-.049-.045-.095-.075-.156zm-5.847.264c-.06.096-.097.194-.132.293a3.4 3.4 0 0 1-.555 1.01q-.3.373-.762.493c-.23.06-.464.076-.7.07c-.048-.002-.097.002-.158.005c.016.04.021.066.035.085c.1.145.23.246.4.295c.157.046.316.034.498.023q.272-.055.485-.234c.238-.199.402-.454.536-.732c.175-.363.264-.751.342-1.144c.01-.053.008-.11.011-.164m14.945-4.586c.008.029.016.057.027.107c.024.155.051.31.072.464c.03.219.067.437.078.657c.017.344.027.689-.014 1.033c-.037.315-.063.633-.116.946a6.2 6.2 0 0 1-.46 1.518c-.008.018-.01.039-.02.082c.047-.03.077-.042.098-.064q.13-.124.248-.255c.271-.305.458-.66.596-1.043c.18-.498.228-1.011.145-1.531c-.103-.65-.33-1.263-.597-1.881l-.024-.055zM5.797 8.29a.26.26 0 0 0 .018.153q.186.376.379.75c.025.049.066.09.03.163c-.284.06-.578.119-.88.255c.059.038.097.06.132.087c.042.032.112.058.09.12c-.01.033-.075.048-.117.072c.017.01.043.021.067.036c.166.102.33.207.447.368c.138.192.229.404.188.644c-.079.469-.306.85-.69 1.132q-.08.062-.161.122a.24.24 0 0 0-.103.245a.8.8 0 0 0 .055.195c.083.196.22.35.375.492q.126.116.222.257a.37.37 0 0 1 .025.377q-.036.075-.076.148c-.03.06-.028.111.022.162q.063.064.112.138c.038.058.078.079.147.05a.5.5 0 0 1 .333-.006c.16.046.302.126.444.21q.195.115.4.219c.067.035.14.05.219.026c.071-.022.124.01.145.076q.031.094-.074.139c-.07.03-.137.063-.209.088c-.1.035-.201.073-.314.077c-.013-.107.11-.088.127-.159c-.206-.126-.643-.145-.801-.034c.063.112.035.21-.096.313c-.13-.1-.025-.202.002-.3a.21.21 0 0 0-.249.17c-.015.101.067.216.178.224c.108.007.218-.005.326-.012c.06-.005.12-.027.199 0c-.103.123-.248.127-.357.19c.002.05.07.086.019.131c-.053.048-.095-.001-.132-.03a3 3 0 0 1-.231-.197a.47.47 0 0 1-.157-.311a.5.5 0 0 0-.043-.172c-.032-.074-.032-.137.033-.19c-.018-.03-.028-.053-.045-.072a1.2 1.2 0 0 1-.196-.369c-.053-.137-.046-.264.048-.381c.024-.03.05-.06.064-.095a.7.7 0 0 0 .047-.168c.017-.165-.064-.287-.182-.387c-.186-.156-.36-.322-.46-.551c-.005-.011-.024-.017-.037-.026c-.011.017-.024.027-.025.038c-.019.185-.045.37-.052.557c-.014.377.058.743.162 1.104c.118.41.289.798.488 1.173q.4.753.812 1.5c.055.098.13.189.208.27c.198.202.452.272.724.273q.303.002.605-.026c.295-.03.59-.073.884-.113c.183-.025.365-.057.548-.08c.21-.026.38.073.522.21c.16.156.305.327.447.5c.22.265.397.56.554.867c.05.098.07.1.147.03q.194-.182.394-.36c.067-.059.088-.12.067-.213a3.5 3.5 0 0 1-.085-.796q.002-.236.018-.471c.015-.224.03-.45.06-.672a59 59 0 0 1 .362-2.298c.087-.493.182-.984.268-1.477c.06-.347.118-.694.162-1.043q.051-.411.063-.825c.011-.332.003-.665.002-.998c0-.077.004-.155-.01-.23c-.028-.142-.01-.155-.162-.19a6 6 0 0 0-.607-.107c-.146-.018-.207-.053-.221-.19c-.006-.049-.025-.098-.041-.146c-.009-.025-.024-.048-.046-.09l-.025.264c-.009.096-.029.116-.127.115c-.055 0-.11-.008-.164-.008c-.476 0-.952-.008-1.426.032c-.095.008-.173-.015-.226-.103c-.04-.066-.088-.126-.134-.186c-.063-.084-.086-.093-.182-.06a31 31 0 0 0-.582.21a2.7 2.7 0 0 0-.675.394a1 1 0 0 1-.323.168c-.033.01-.07.008-.127.013c.02-.066.024-.114.047-.15c.064-.105.135-.205.205-.306l.073-.095l-.015-.023l-.201.037c-.146.04-.296.07-.437.122c-.148.053-.266.023-.386-.072a3.6 3.6 0 0 1-.733-.786zm8.592 8.963l-.147.09q-.33.2-.659.402q-.14.087-.27.188c-.085.07-.124.161-.072.272c.047.1.093.2.147.294c.047.08.124.138.213.147c.11.01.228.012.336-.012c.217-.05.372-.205.528-.357a.29.29 0 0 0 .087-.308c-.046-.18-.079-.365-.118-.547c-.011-.052-.027-.103-.045-.169m-.257-2.409c-.12.291-.205.597-.325.91c-.151.433-.294.87-.435 1.323c.036-.01.054-.01.067-.018c.261-.16.522-.324.785-.484c.054-.033.071-.078.065-.138q-.018-.196-.034-.393l-.068-.886l-.029-.31q-.013 0-.026-.004m3.081-8.13l.099.285c.08.231.159.463.24.714l.58 1.952q.28.946.558 1.893c.114.382.235.762.343 1.146c.072.257.126.519.186.799c.044.206.087.413.127.64c.034.106.023.226.077.325l.025-.006l-.068-.362c-.038-.206-.077-.412-.113-.638l-.046-.211c-.095-.396-.177-.796-.29-1.187c-.196-.685-.413-1.364-.618-2.046c-.165-.549-.322-1.1-.488-1.648c-.069-.227-.15-.45-.226-.695l-.117-.336a12 12 0 0 0-.115-.322q-.061-.159-.127-.314l-.027.01zm-10.988 7.59c-.063-.001-.115.014-.134.083a.35.35 0 0 0 .41.012a5 5 0 0 0-.276-.095M5.23 11.98c-.026-.027-.057-.048-.075.002c-.012.032-.007.07-.01.113c.082-.037.082-.037.085-.115m.062-1.189a.14.14 0 0 0-.088.056a.2.2 0 0 0-.025.11c.005.152.01.306.026.457a.8.8 0 0 0 .066.218q.091.202.288.101c.055-.027.06-.054.025-.11a5 5 0 0 1-.129-.211c-.015-.068-.066-.131-.033-.207c.04-.09-.076-.116-.074-.19v-.141c-.003-.038-.006-.087-.056-.083m-.017-.968a.87.87 0 0 0-.467.127c-.076.045-.084.07-.05.158q.05.131.115.254c.064.117.09.125.21.077a.66.66 0 0 1 .336-.053c.202.022.357.136.504.264l.092.077q.01-.01.022-.018c-.019-.105-.035-.226-.149-.264c-.157-.053-.324-.075-.508-.117l-.24-.005c.24-.169.452-.044.687.009c-.063-.115-.153-.147-.23-.193c-.082-.05-.17-.092-.25-.144c-.06-.037-.12-.08-.072-.172m10.233.325c-.23-.01-.427.08-.608.211c-.034.026-.06.065-.105.117c.087.026.15.046.232.065q.066-.022.13-.046c.306-.114.61-.115.904.031c.126.063.237.04.366-.005c-.02-.031-.03-.054-.045-.071a1 1 0 0 0-.448-.273c-.14-.044-.284-.024-.426-.03zM7.99 6.483a.3.3 0 0 0 .002.133c.08.321.156.643.242.962c.104.387.27.75.456 1.103c.02.037.061.08.098.087a.4.4 0 0 0 .253-.051l-.472-.84c-.23-.448-.405-.92-.579-1.394M10.397.497c-.2-.008-.405.004-.603.034q-.355.054-.7.152c-.287.08-.569.18-.852.273c-.04.013-.074.038-.11.058q.041.02.07.014c.287-.068.58-.085.873-.09c.134-.002.269.009.402.025c.19.024.382.048.57.09c.456.104.874.3 1.265.556c.464.306.888.66 1.257 1.078c.205.232.395.475.56.739c.17.274.315.561.449.856c.273.601.456 1.232.6 1.876c.04.173.07.348.1.524c.017.104.065.167.17.19c.122.028.2.105.22.251c-.003.102-.06.174-.129.24a1.1 1.1 0 0 0-.268.358a.16.16 0 0 0 .083-.039c.08-.086.162-.172.235-.265a.56.56 0 0 0 .13-.333c.009-.05.022-.1.024-.15c.007-.124-.017-.15-.143-.168c-.025-.004-.049-.014-.073-.015c-.082-.007-.125-.063-.137-.131c-.033-.198-.004-.355.247-.408q.13-.025.26-.042c.158-.023.315-.053.473-.067c.14-.012.19.033.226.167c.008.029.018.057.021.087c.019.179-.008.225-.141.288c-.027.013-.055.024-.078.042a.15.15 0 0 0-.051.067c-.039.144.073.382.206.445l.673.32c.023.011.05.015.075.023l.018-.026c-.015-.008-.032-.013-.044-.024a2.3 2.3 0 0 0-.544-.32l-.173-.075a.2.2 0 0 1-.126-.191a.19.19 0 0 1 .128-.187l.059-.025c.099-.044.118-.076.112-.187a.4.4 0 0 0-.008-.063c-.067-.294-.123-.59-.205-.88a9.5 9.5 0 0 0-.826-2.036a7.5 7.5 0 0 0-1.39-1.805a4.5 4.5 0 0 0-1.177-.824a3.7 3.7 0 0 0-1.016-.328a6 6 0 0 0-.712-.074m6.719 5.955c.01.014.018.028.038.034l-.022-.044zM4.103 3.917a.1.1 0 0 1-.03.012l-.04.039c-.01.01-.02.02-.045.04l-.363.354c-.088.085-.17.178-.266.253c-.284.22-.425.53-.544.855a.13.13 0 0 0-.007.071c.013.055.033.108.052.168l.074.026c-.017.056-.03.105-.047.152l-.175.491c-.005.015.008.036.019.077c.08-.175.158-.33.225-.489c.228-.544.484-1.074.819-1.561q.133-.199.283-.401c.004-.006.007-.013.022-.03c.001-.016.003-.032.015-.04zm12.976 2.408a.02.02 0 0 1 .009.019l-.006.01l.007.02l.018.022c.002-.007.007-.016.005-.021c-.003-.01-.012-.018-.02-.038zM4.199 4.48c-.003.004-.008.008-.027.014a.14.14 0 0 1-.031.047a2 2 0 0 1-.124.167c-.048.07-.116.055-.181.041c-.134-.028-.228.016-.287.143c-.089.187-.187.37-.273.56c-.049.108-.11.216-.118.36c.081.003.154.007.228.008h.228a3 3 0 0 1-.079.264l-.033.155l.02.004c.018-.046.037-.092.067-.153c.066-.142.13-.285.2-.426c.02-.04.034-.1.116-.092c0 .043.004.084 0 .124c-.005.045-.017.09-.028.143c.141.043.086.174.115.269c.102-.022.104-.195.248-.144v.205l.017.002l.439-1.059c-.13 0-.246-.02-.358.033c-.024.011-.058-.001-.108-.004c.075-.15.139-.278.211-.417a.1.1 0 0 1 .025-.036c0-.015-.001-.03.008-.038l.006-.02c-.005.006-.01.011-.028.017a.1.1 0 0 1-.026.045a.1.1 0 0 1-.032.033c-.123.157-.09.164-.258.106c-.079-.027-.078-.028-.047-.144c.028-.046.056-.093.098-.15c0-.016-.001-.032.007-.042L4.2 4.48zm2.073-.67c-.003.006-.007.011-.027.016c-.094.125-.194.246-.28.377c-.155.238-.301.481-.451.723c-.14.224-.345.368-.575.481c-.017.008-.04.006-.079.011c.012-.059.016-.109.033-.153a6 6 0 0 1 .229-.518l-.007-.02a.1.1 0 0 1-.035.025c-.028.05-.055.1-.093.164c-.26.424-.443.817-.442.95c.024.004.048.011.073.013c.177.013.188.007.26-.165a.27.27 0 0 1 .147-.15l.175-.07c.044-.018.085-.057.146-.032c.003.05-.01.11.014.145c.042.062.044.125.047.193c.002.049.017.098.026.147c.029-.034.039-.065.05-.097c.142-.39.277-.782.428-1.17c.1-.256.22-.504.33-.756c.013-.03.013-.067.03-.092zm3.987-.34c0 .045.01.084.021.123c.042.16.094.318.124.48c.024.133.023.27.028.406c0 .033-.019.067-.032.11c-.094-.058-.047-.158-.106-.215h-.125c-.015.072-.01.152-.046.2c-.066.085-.155.154-.236.227c-.043.038-.078.018-.103-.025l-.046-.087c-.065.035-.117.069-.172.093c-.116.051-.235.095-.35.147c-.085.038-.09.053-.07.147c.014.075.034.148.047.223c.013.072.05.109.123.124c.233.05.462.115.657.265c.058-.102.058-.102.168-.151q.044-.023.092-.042c.08-.03.115-.017.15.06c.023.048.041.098.066.158c.06-.14-.042-.267.017-.416c.157.18.24.39.375.567a.2.2 0 0 0 .022-.098l.002-.371c0-.034.013-.067.02-.1l.032-.003c.11.155.13.354.226.52a3 3 0 0 0-.01-.392c-.004-.045 0-.074.05-.088c.08.036.116.14.215.158c-.03-.275-.423-1.137-.798-1.635c-.114-.127-.2-.28-.34-.386zm-2.667.696c-.019.034-.03.05-.037.067c-.061.185-.125.37-.18.556c-.031.105-.087.169-.195.19c-.09.019-.178.052-.268.073c-.038.009-.089.015-.118-.003c-.024-.016-.025-.069-.036-.106c-.064.076-.082.087-.17.047c-.133-.062-.262-.135-.393-.201c-.048-.025-.093-.063-.17-.03l-.137.382c-.099.28-.087.242.095.453c.046.048.102.03.154.023c.054-.009.106-.03.16-.036c.13-.013.26-.08.367-.015c.204-.064.387-.122.571-.178q.076-.021.114.054c.022.042.034.093.082.121c.038-.056-.013-.128.063-.178l.14.241zm.278.358c-.096-.01-.107.01-.11.108a1 1 0 0 0 .002.115c.03.2.099.386.174.57q.005.008.022.015l.078-.05c.052.036.081.088.153.088c.205-.002.41.014.616.012c.099-.001.158.042.205.12c.018.03.024.077.088.066l-.08-.394c-.05-.195-.085-.395-.172-.589c-.057.057-.114.068-.18.046a1 1 0 0 0-.135-.028c-.22-.028-.44-.059-.66-.08zm10.254-1.727c.089.163.155.316.139.491c-.016.168.026.342-.044.516c-.047-.033-.088-.082-.112-.075c-.117.035-.164-.057-.227-.115a5 5 0 0 1-.286-.29l-.104-.113l-.023.019c.035.046.07.093.11.156c.04.064.084.127.122.193c.034.058.065.118.031.205q-.123-.014-.246-.032c-.06-.01-.101 0-.124.07c-.031.098-.037.096-.15.09c.02.042.036.08.057.116q.06.11-.03.196l-.178.181a.18.18 0 0 1-.185.046c-.222-.061-.447-.113-.67-.174c-.032-.009-.063-.04-.086-.068c-.03-.04-.052-.087-.08-.13q-.067-.104-.136-.207a.2.2 0 0 0-.014.105c.012.127.03.253.035.38c.005.1-.024.12-.121.104c-.104-.017-.206-.04-.31-.058c-.064-.012-.131-.028-.202.03l.081.208c.09 0 .166-.01.237.002a.82.82 0 0 1 .458.251c.078.083.154.168.241.26l.018-.005c-.004-.006-.008-.013-.01-.04c.014-.056-.062-.118.018-.178c.031.03.064.057.088.09c.058.078.111.159.169.257l.089.141l.024-.013l-.427-.934c.055.007.083.007.108.016q.29.105.577.216q.111.042.219.094q.091.043.157-.033q.076-.084.154-.167q.076-.076.132.014c.016.025.026.053.04.08c.071.138.143.277.217.433l.159.308l.025-.011c-.044-.106-.07-.218-.138-.334c-.057-.182-.168-.346-.206-.545c.136.034.362.326.567.732l.057.074l.018-.011a2 2 0 0 1-.052-.127c-.046-.145-.097-.29-.136-.436c-.022-.083-.036-.173.022-.26l.109.058l-.026-.207l.027-.016c.022.02.05.036.065.06q.108.163.215.33c.01.016.029.029.043.043c-.036-.217-.2-.38-.229-.626l.155.112c.014-.166.012-.319.042-.465c.032-.158-.023-.297-.063-.445c.024.004.036.006.055.025q.137.187.277.371c.02.027.05.047.069.087l.04.063l.019-.015a.3.3 0 0 1-.053-.082a28 28 0 0 1-.332-.49c-.221-.311-.363-.467-.485-.521m-6.57.327c-.003.161.092.275.069.415l-.368.087c.09.139.032.237-.052.331c-.05.057-.092.122-.143.178c-.037.04-.046.078-.018.126l.16.275c.029.048.072.066.128.064c.076-.003.152 0 .228-.001c.116-.003.216.022.275.137c.006.014.02.024.044.052c.004-.059-.003-.098.01-.13c.016-.04.04-.099.072-.108c.084-.023.173-.024.26-.03c.013-.001.027.018.04.029l.071.065c.019-.11-.082-.198-.024-.31l.126.04c-.026-.123-.07-.245-.071-.366a.8.8 0 0 1 .115-.36c.107.062.16.156.234.253c.183.265.36.533.494.834c.165-.078.27.068.407.088c-.003-.106-.133-.441-.197-.492a.14.14 0 0 0-.102-.028c-.06.011-.119.039-.191.063c-.025-.039-.056-.078-.077-.122a4 4 0 0 0-.473-.783c-.076-.094-.16-.182-.228-.26l-.391.285q-.074.053-.132-.017l-.169-.207c-.025-.03-.053-.059-.097-.108", "c": "#2D6376", "vb": "0 0 24 24", "fr": "evenodd" },
    { "id": "python", "name": "Python", "tier": 2, "d": "M11.858 0c-.978.005-1.913.088-2.736.234C6.7.662 6.26 1.558 6.26 3.21v2.182h5.725v.727H4.111c-1.664 0-3.121 1-3.577 2.903-.526 2.181-.549 3.542 0 5.82.407 1.694 1.379 2.902 3.043 2.902h1.969v-2.616c0-1.89 1.635-3.557 3.576-3.557h5.72c1.591 0 2.862-1.31 2.862-2.91v-5.45c0-1.553-1.309-2.718-2.863-2.977A18 18 0 0 0 11.858 0M8.762 1.755c.591 0 1.074.491 1.074 1.095 0 .601-.483 1.087-1.074 1.087A1.08 1.08 0 0 1 7.688 2.85c0-.604.48-1.095 1.074-1.095m9.656 4.364v2.543c0 1.971-1.671 3.63-3.577 3.63H9.122c-1.566 0-2.862 1.34-2.862 2.91v5.452c0 1.551 1.349 2.464 2.862 2.91 1.813.532 3.55.628 5.72 0 1.44-.418 2.862-1.258 2.862-2.91V18.47h-5.719v-.727h8.582c1.664 0 2.284-1.16 2.862-2.903.598-1.793.573-3.518 0-5.819-.41-1.656-1.196-2.903-2.862-2.903zm-3.216 13.807a1.08 1.08 0 0 1 1.074 1.088c0 .604-.48 1.094-1.074 1.094-.592 0-1.075-.49-1.075-1.094 0-.601.483-1.088 1.075-1.088", "c": "#3776AB" },
    { "id": "astro", "name": "Astro", "tier": 2, "d": "M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944.856 1.026 2.043 1.352 3.272 1.535 1.897.283 3.76.177 5.522-.678.202-.098.388-.229.608-.36.166.473.209.95.151 1.437-.14 1.185-.738 2.1-1.688 2.794-.38.277-.782.525-1.175.787-1.205.804-1.531 1.747-1.078 3.119l.044.148a3.158 3.158 0 0 1-1.407-1.188 3.31 3.31 0 0 1-.544-1.815c-.004-.32-.004-.642-.048-.958-.106-.769-.472-1.113-1.161-1.133-.707-.02-1.267.411-1.415 1.09-.012.053-.028.104-.045.165h.002zm-5.961-4.445s3.24-1.575 6.49-1.575l2.451-7.565c.092-.366.36-.614.662-.614.302 0 .57.248.662.614l2.45 7.565c3.85 0 6.491 1.575 6.491 1.575L16.088.727C15.93.285 15.663 0 15.303 0H8.697c-.36 0-.615.285-.784.727l-5.516 14.99z", "c": "#BC52EE" },
    { "id": "jquery", "name": "jQuery", "tier": 2, "d": "M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269.037.079.078.154.118.229.023.052.049.1.077.15.013.027.031.056.047.082.026.052.054.102.081.152l.157.266c.03.049.057.097.09.146.056.094.12.187.178.281.026.04.05.078.079.117a6.368 6.368 0 00.31.445c.078.107.156.211.24.315.027.038.058.076.086.115l.22.269c.028.03.055.067.084.099.098.118.202.233.306.35l.005.006a3.134 3.134 0 00.425.44c.08.083.16.165.245.245l.101.097c.111.105.223.209.34.309.002 0 .003.002.005.003l.057.05c.102.089.205.178.31.26l.125.105c.085.068.174.133.26.2l.137.105c.093.07.192.139.287.207.035.025.07.05.106.073l.03.023.28.185.12.08c.148.094.294.184.44.272.041.02.084.044.123.068.108.062.22.125.329.183.06.034.122.063.184.094.075.042.153.083.234.125a.324.324 0 01.056.023c.033.015.064.031.096.047.12.06.245.118.375.175.024.01.05.02.076.034.144.063.289.123.438.182.034.01.07.027.105.04.135.051.274.103.411.152l.05.018c.154.052.305.102.46.15.036.01.073.023.111.033.16.048.314.105.474.137 10.273 1.872 13.258-6.177 13.258-6.177-2.508 3.266-6.958 4.127-11.174 3.169-.156-.036-.312-.086-.47-.132a13.539 13.539 0 01-.567-.182l-.062-.024c-.136-.046-.267-.097-.4-.148a1.615 1.615 0 00-.11-.04c-.148-.06-.29-.121-.433-.184-.031-.01-.057-.024-.088-.036a23.44 23.44 0 01-.362-.17 1.485 1.485 0 01-.106-.052c-.094-.044-.188-.095-.28-.143a3.947 3.947 0 01-.187-.096c-.114-.06-.227-.125-.34-.187-.034-.024-.073-.044-.112-.066a15.922 15.922 0 01-.439-.27 2.107 2.107 0 01-.118-.078 6.01 6.01 0 01-.312-.207c-.035-.023-.067-.048-.103-.073a9.553 9.553 0 01-.295-.212c-.042-.034-.087-.066-.132-.1-.088-.07-.177-.135-.265-.208l-.118-.095a10.593 10.593 0 01-.335-.28.258.258 0 00-.037-.031l-.347-.316-.1-.094c-.082-.084-.166-.164-.25-.246l-.098-.1a9.081 9.081 0 01-.309-.323l-.015-.016c-.106-.116-.21-.235-.313-.355-.027-.03-.053-.064-.08-.097l-.227-.277a21.275 21.275 0 01-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9.111 9.111 0 00.678 1.133c.23.33.484.721.793.988.107.122.223.24.344.36l.09.09c.114.11.232.217.35.325l.016.013a9.867 9.867 0 00.414.342c.034.023.063.05.096.073.14.108.282.212.428.316l.015.009c.062.045.128.086.198.13.028.018.06.042.09.06.106.068.21.132.318.197.017.007.032.016.048.023.09.055.188.108.282.157.033.02.065.035.1.054.066.033.132.068.197.102l.032.014c.135.067.273.129.408.19.034.014.063.025.092.039.111.048.224.094.336.137.05.017.097.037.144.052.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8.04 8.04 0 01-.449-.13c-.048-.014-.09-.029-.136-.043-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135-.034-.015-.065-.025-.091-.04-.14-.063-.281-.125-.418-.192l-.206-.107-.119-.06a5.673 5.673 0 01-.265-.15.62.62 0 01-.062-.035c-.106-.066-.217-.13-.318-.198-.034-.019-.065-.042-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313-.032-.029-.063-.053-.094-.079-1.499-1.178-2.681-2.79-3.242-4.613-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46.665 1.563 2.024 2.79 3.608 3.37.065.025.128.046.196.07l.088.027c.092.03.185.063.28.084 4.381.845 5.567-2.25 5.886-2.704-1.043 1.498-2.792 1.857-4.938 1.335a4.85 4.85 0 01-.516-.16 6.352 6.352 0 01-.618-.254 6.53 6.53 0 01-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5", "c": "#0769AD" },
    { "id": "tanstack", "name": "TanStack Query", "tier": 2, "d": "M6.9297 13.6875c.164-.0938.375-.0352.4687.1328l.0625.1055c.4805.8515.9805 1.6601 1.5 2.4258.6133.9023 1.3047 1.8164 2.0743 2.7421a.3455.3455 0 0 1-.0391.4844l-.0742.0664c-2.543 2.2227-4.1914 2.664-4.9532 1.332-.746-1.3046-.4765-3.6718.8086-7.1093a.3437.3437 0 0 1 .1524-.1797ZM17.75 16.3008c.1836-.0313.3594.086.3945.2695l.0196.1016c.6289 3.2851.1875 4.9297-1.3243 4.9297-1.4804 0-3.3593-1.4024-5.6484-4.2032a.3271.3271 0 0 1-.0742-.2226c0-.1875.1562-.3399.3437-.3399h.1211a32.9838 32.9838 0 0 0 2.8086-.0976c1.0703-.086 2.1914-.2305 3.3594-.4375zm.871-6.9766a.3528.3528 0 0 1 .4454-.211l.1016.0352c3.2617 1.1094 4.5039 2.332 3.7187 3.6641-.7656 1.3047-2.9922 2.254-6.6836 2.8477-.082.0117-.168-.004-.2383-.047-.168-.0976-.2265-.3085-.125-.4765l.0625-.1054c.504-.8438.957-1.6836 1.3672-2.5235.4766-.9883.9297-2.0508 1.3516-3.1836zM7.797 8.3398c.082-.0117.168.004.2383.047.168.0976.2265.3085.125.4765l-.0625.1054a34.0882 34.0882 0 0 0-1.3672 2.5235c-.4766.9883-.9297 2.0508-1.3516 3.1836a.3528.3528 0 0 1-.4453.211l-.1016-.0352c-3.2617-1.1094-4.5039-2.332-3.7187-3.6641.7656-1.3047 2.9922-2.254 6.6836-2.8477Zm5.2812-3.9843c2.543-2.2227 4.1914-2.664 4.9532-1.332.746 1.3046.4765 3.6718-.8086 7.1093a.3436.3436 0 0 1-.1524.1797c-.164.0938-.375.0352-.4687-.1328l-.0625-.1055c-.4805-.8515-.9805-1.6601-1.5-2.4258-.6133-.9023-1.3047-1.8164-2.0743-2.7421a.3455.3455 0 0 1 .0391-.4844Zm-5.793-2.082c1.4805 0 3.3633 1.4023 5.6485 4.203a.3488.3488 0 0 1 .0781.2188c-.0039.1914-.1562.3438-.3476.3438l-.1172-.004a34.5835 34.5835 0 0 0-2.8086.1016c-1.0742.086-2.1953.2305-3.3633.4375a.343.343 0 0 1-.3945-.2734l-.0196-.0977c-.629-3.2851-.1876-4.9297 1.3242-4.9297Zm2.8711 5.8124h3.6875a.638.638 0 0 1 .5508.3164l1.8477 3.2188a.6437.6437 0 0 1 0 .6289l-1.8477 3.2227a.638.638 0 0 1-.5507.3164h-3.6875c-.2266 0-.4375-.1211-.547-.3164L7.7579 12.25a.6437.6437 0 0 1 0-.629l1.8516-3.2187c.1093-.1953.3203-.3164.5468-.3164Zm3.2305.793a.638.638 0 0 1 .5508.3164l1.3906 2.4258a.6437.6437 0 0 1 0 .6289l-1.3906 2.4297a.638.638 0 0 1-.5508.3164h-2.7734c-.2266 0-.4375-.1211-.5469-.3164L8.672 12.25a.6437.6437 0 0 1 0-.629l1.3945-2.4257c.1094-.1953.3203-.3164.5469-.3164Zm-.4922.8672h-1.789c-.2266 0-.4336.1172-.547.3164l-.8983 1.5586a.6437.6437 0 0 0 0 .6289l.8984 1.5625a.6317.6317 0 0 0 .5469.3164h1.789a.6317.6317 0 0 0 .547-.3164l.8983-1.5625a.6437.6437 0 0 0 0-.629l-.8984-1.5585c-.1133-.1992-.3203-.3164-.5469-.3164Zm-.4765.8281c.2265 0 .4375.1211.5468.3164l.422.7305c.1132.1953.1132.4375 0 .6289l-.422.7344c-.1093.1953-.3203.3164-.5468.3164h-.836a.6317.6317 0 0 1-.5468-.3164l-.422-.7344c-.1132-.1914-.1132-.4336 0-.629l.422-.7304a.6317.6317 0 0 1 .5468-.3164zm-.418.8164a.548.548 0 0 0-.4727.2735c-.0976.168-.0976.375 0 .5468a.5444.5444 0 0 0 .4727.2696.5444.5444 0 0 0 .4727-.2696c.0976-.1718.0976-.3789 0-.5468A.548.548 0 0 0 12 11.3906Zm-4.4219.5469h.9805M18.9805 7.75c.3906-1.8945.4765-3.3438.2226-4.3984-.1484-.629-.4218-1.1368-.8398-1.5078-.4414-.3907-1-.582-1.625-.582-1.0352 0-2.1211.4726-3.2813 1.3671-.4726.3633-.9648.8047-1.4726 1.3164-.043-.0508-.086-.1015-.1367-.1445-1.4454-1.2852-2.6602-2.082-3.6993-2.3906-.6171-.1836-1.1953-.1993-1.7226-.0235-.5586.1875-1.004.5742-1.3164 1.1172-.5156.8945-.6524 2.0742-.461 3.5274.0782.5898.2149 1.2343.4024 1.9335a1.1187 1.1187 0 0 0-.2149.047C3.008 8.621 1.711 9.2694.9258 10.0155c-.4649.4414-.7695.9375-.8828 1.4805-.1133.5781 0 1.1562.3125 1.6992.5156.8945 1.4648 1.5977 2.8164 2.1563.543.2226 1.1562.4257 1.8437.6093a1.0227 1.0227 0 0 0-.0703.2266c-.3906 1.8906-.4765 3.3438-.2226 4.3945.1484.629.4257 1.1407.8398 1.5078.4414.3907 1 .582 1.625.582 1.0352 0 2.121-.4726 3.2813-1.3632.4765-.3711.9726-.8164 1.4882-1.336a1.2 1.2 0 0 0 .1953.2266c1.4454 1.2852 2.6602 2.082 3.6993 2.3906.6172.1836 1.1953.1993 1.7226.0235.5586-.1875 1.004-.5742 1.3164-1.1172.5157-.8945.6524-2.0742.461-3.5273-.082-.6133-.2227-1.2813-.4258-2.0118a1.2248 1.2248 0 0 0 .2383-.0468c1.828-.6094 3.125-1.2578 3.9101-2.004.4649-.4413.7696-.9374.8828-1.4804.1133-.5781 0-1.1563-.3125-1.6992-.5156-.8946-1.4648-1.5977-2.8164-2.1563-.5586-.2304-1.1953-.4414-1.9062-.625a.8647.8647 0 0 0 .0586-.1953z", "c": "#FF4154" },
    { "id": "vuedotjs", "name": "Vue.js", "tier": 2, "d": "M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z", "c": "#4FC08D" },
    { "id": "zustand", "name": "Zustand", "tier": 2, "d": "M96.265 1.102a12.7 12.7 0 0 0-4.187.84q-.936.36-2.678 1.438a87 87 0 0 1-2.625 1.56a429 429 0 0 1-3.244 2.906a19.4 19.4 0 0 0-2.74 3.499a.324.255 57 0 0-.021.238q.066.222-.116.267a.14.45 83 0 0-.232.104a3.93 3.93 0 0 0-1.055 1.896q-.104.42-.342.844a2.9 2.9 0 0 0-.336.818q-.105.534-.207 1.067a.83.83 0 0 1-.453.539a60.9 60.9 0 0 0-19.43-2.285a4 4 0 0 0-.855.127q-.42.112-.836.246a57.5 57.5 0 0 0-20.091 4.732a2.35 2.35 0 0 1-1.108-.982l-.384-.653a25.2 25.2 0 0 0-3.565-4.066q-.671-.844-2.223-1.79q-3.64-2.22-7.464-2.337l-.586.027a2.3 2.3 0 0 1-.78-.1a3.5 3.5 0 0 0-2.033.565l-.814.526q-3.186 1.84-5.03 4.945q-2.097 3.54-3.04 7.728q-.582 2.572-.454 5.702q.113.28.165.576q.042.232-.053.578a3.8 3.8 0 0 0-.133.97q-.006.36.225.926q.47 1.16.332 2.434q.762 3.34 1.203 4.951q.118.432.011.736l-.289.602a10.1 10.1 0 0 0-1.82 2.236q-.878 1.464-.926 1.541q-.534.873-.94 1.824a48.9 48.9 0 0 0-6.454 18.56a5.85 5.85 0 0 0-.352 2.393a29 29 0 0 0-.29 5.092l.099 3.063q.031 2.783.191 3.818a55.7 55.7 0 0 0 2.29 9.348l.32.55a54.4 54.4 0 0 0 3.56 8.412q1.089 2.066 1.672 2.81a46 46 0 0 0 3.115 4.485l.764 1.026q.676.903 1.539 1.646q.907 1.102 1.807 2.207a73 73 0 0 1 2.982 2.637q1.454 1.356 2.63 2.146a55 55 0 0 0 5.057 3.008a77 77 0 0 0 3.844 2.578q1.218.883 2.846 1.504q3.332 1.275 6.168 2.057q1.05.288 2.82 1.144a.469.487 56.3 0 0 .258.047a8 8 0 0 1 1.672.012q1.311.332 2.625.654q1.093.265 8.545.762a30 30 0 0 0 4.148-.01a52 52 0 0 0 8.16-.217q1.245-.131 3.047-.547a100 100 0 0 1 3.039-.642a28 28 0 0 1 3.344-1.002a183 183 0 0 1 5.234-2.141q.736-.29 1.717-.88q.95-.575 1.761-.843q1.924-.631 3.3-1.675q.408-.31.97-.487a5.1 5.1 0 0 0 1.615-.85a29 29 0 0 0 3.516-2.156a65 65 0 0 0 3.265-2.51a40.3 40.3 0 0 0 5.211-5.081a7.6 7.6 0 0 1 1.637-1.438a32 32 0 0 0 2.193-2.824a54 54 0 0 0 8.026-13.512q.302-.54.564-1.097q.171-.362.324-1.172a4 4 0 0 1 .319-.992q.174-.37.265-.858a2.8 2.8 0 0 1 .313-.861q.26-.455.318-.771q.078-.422.147-.842a.383.289 40.3 0 0-.053-.24q-.252-.42.21-.659a1.96 1.96 0 0 0 .362-1.256a.485.428 60.6 0 1 .055-.248a3.86 3.86 0 0 0 .47-1.824q.484-2.703.692-5.435q.003-.01.164-1.16q.09-.645-.002-1.348a14 14 0 0 1-.05-3.16a3.54 3.54 0 0 1-.03-1.612a.439.396 42 0 0-.027-.25q-.09-.219-.123-.453q-.027-.18.076-.576q.093-.353-.014-.603a3.8 3.8 0 0 1-.285-1.328a.24.24 0 0 1 .22-.247a6.2 6.2 0 0 0 3.06-1.078a21 21 0 0 0 1.857-1.427a3.3 3.3 0 0 0 1.568-1.707q.378-.51.715-1.04a.378.303 61.1 0 0 .043-.246q-.064-.381.22-.513a.24.466 79.6 0 0 .2-.155a8.7 8.7 0 0 0 1.306-5.07a.6.6 0 0 1 .053-.25a.63.63 0 0 0 .025-.478l-.123-.364a9.6 9.6 0 0 0-1.205-3.015a.76.76 0 0 0-.261-.264q-.565-.343-.653-.652a.597.6 6.8 0 0-.277-.352a16 16 0 0 1-2.281-1.582q-.384-.32-1.924-.683q-.696.012-1.389-.053q-1.017-.093-1.375-.068a6.6 6.6 0 0 0-2.804.84a25 25 0 0 0-2.352.849a.15.148 64.5 0 1-.187-.066A59.3 59.3 0 0 0 102.937 31.9q-.346-.346-.156-.815l1.67-4.115q1.758-4.596 2.275-9.775q.503-5.044-1.22-9.617a3.6 3.6 0 0 0-.319-.56q-1.774-3.454-5.113-5.202h-.002a6.1 6.1 0 0 0-2.355-.677a13 13 0 0 0-1.452-.038Zm-.667 1.834l.242.008a8 8 0 0 1 1.408.184a8 8 0 0 1 .904.265a8 8 0 0 1 .873.377a8 8 0 0 0-.873-.377a7.7 7.7 0 0 0-2.312-.449zm6.656 3.358a1 1 0 0 1 .031.21a.4.4 0 0 1-.035.159a.26.26 0 0 1-.1.11q-.016.009-.035.017q-.018.01-.04.017q.022-.007.04-.017q.019-.008.035-.018a.26.26 0 0 0 .1-.11a.3.3 0 0 0 .025-.071a.5.5 0 0 0 .002-.186a1 1 0 0 0-.023-.111m-8.472 1.391a9 9 0 0 0-.81.045h-.001q.399-.042.81-.046zm.837.029a9 9 0 0 1 1.68.29a7.6 7.6 0 0 1 2.861 1.488v.001a7.6 7.6 0 0 0-2.861-1.488a9 9 0 0 0-1.68-.291m-3.2.33a8.4 8.4 0 0 0-2.812 1.523q-1.035.841-2.056 1.703a13.8 13.8 0 0 0-2.29 2.451a14 14 0 0 0-1.624 2.94l-1.08 2.728l1.078-2.728q.647-1.59 1.627-2.94a13.8 13.8 0 0 1 2.287-2.453q1.022-.86 2.058-1.7a8.4 8.4 0 0 1 2.813-1.524zm-6.31.59a.2.2 0 0 0 .006.068a.1.1 0 0 0 .026.045a.1.1 0 0 1-.026-.045a.2.2 0 0 1-.006-.068m9.143.482q1.923-.039 3.523 1.092q.56.393.89 1.101a21.7 21.7 0 0 1 1.438 4.024l.24 1.931a.463.19 40.7 0 0 .118.23q.302.375.02.806q-.478.72-.286 1.705a.838.833 59.2 0 1-.168.68a.74.74 0 0 0-.115.792q-.41.364-.268.87l-.199.935l-.267.67a.34.34 0 0 1-.088.199l.004.012l-.006-.012a.9.9 0 0 0 .09.803q-.72.54-.87 1.404h-.002a2.15 2.15 0 0 0-.068.883q.06.53-.348.191q-6.69-5.54-14.638-8.558a.123.089 11.3 0 1-.074-.08l-.008-.059l1.338-2.074q2.793-4.484 7.408-6.873q1.252-.648 2.336-.672m-71.933 2.805q-.905.094-1.102.091q.196.003 1.102-.091m77.892.123h.01v.002zm-77.068.781a.3.401 46.9 0 1 .117.01a.3.401 46.9 0 0-.242.027a.3.401 46.9 0 1 .125-.037m78.201.234q.125.073.15.17q.024.099-.053.221q.075-.123.053-.22q-.025-.098-.15-.17zm-76.5.047l.076.008l.053.018q-.026-.009-.053-.016zm2.651.407l.035.013l.011.002h-.011zm78.642.162l.027.072l.014.06l-.014-.06zm.009.392l-.027.055l-.045.064l.045-.064zm-.328.569l-.014.05q.005-.026.014-.05m-.043.234v.057zm-4.736.185q-.071.266.168.51q-.24-.245-.168-.51m4.756.051l.006.03q.141.582.24 1.175h-.002a16 16 0 0 0-.24-1.175zm-25.902.151a.5.5 0 0 0 .09.13q.152.157.402.061q-.249.096-.403-.06a.5.5 0 0 1-.09-.131zm.732.164a.262.439 53 0 1 .008 0c.03.007.058.019.088.027l-.088-.025a.262.439 53 0 0-.008-.002m-16.379.353a2 2 0 0 0-.24.01q.116-.015.24-.01m17.436.086q.05.031.1.065q-.05-.034-.1-.065m-25.213.143a8 8 0 0 1-.754.013a8 8 0 0 0 .754-.013m48.517.513q.119.064.14.157q.024.09-.048.209q.072-.118.049-.21q-.023-.09-.14-.156zm0 0a.6.6 0 0 0-.377.246q-.155.208-.246.58q.09-.373.246-.58a.6.6 0 0 1 .377-.246m-56.788.68q-.478.083-3.604 1.049q3.128-.966 3.603-1.049zm57.423.008a.1.1 0 0 1 .056.002q-.112-.028-.283.158q.13-.142.227-.16m.062.002q.112.032.164.281q.072.341.057.67t-.115.645a7.7 7.7 0 0 1-.334 2.347q-.07.23-.434.817q.364-.585.434-.817q.347-1.137.334-2.347a2.53 2.53 0 0 0 .058-1.315q-.053-.25-.164-.281m-26.501.014a.6.6 0 0 1-.059.168a.2.2 0 0 1-.039.05a.13.13 0 0 1-.104.032q-.02-.004-.043-.014q.023.01.043.014a.13.13 0 0 0 .104-.032a.2.2 0 0 0 .039-.05a.6.6 0 0 0 .059-.168m-1.024.127a.63.63 0 0 1-.072.394a.7.7 0 0 0 .068-.195a.6.6 0 0 0 .004-.2zm-17.185.146l.033.002l-.068.002zm-2.674.021l.033.002l-.066.002zm3.713.024l.031.002h.002v.002zm-2.072.043l-.036.006l-.02-.002h.018zm-4.72.015a1.1 1.1 0 0 1-.204.266q-.209.188-.436.06q.228.128.436-.06q.106-.093.205-.266zm1.253.036a.223.287 66.4 0 0 .232.058a.223.287 66.4 0 1-.232-.058m10.256.002l.136.003zm-1.793.013H65l-.064.002zm3.642.113l.127.014zm-15.043.04a.233.294 20.7 0 1-.2.12a.233.294 20.7 0 0 .2-.12m4.51.03a25 25 0 0 0-1.648.26a25 25 0 0 0 .896-.156q.375-.057.752-.103zm19.91.1q.544.22 1.078.47q.335.058.637.155a5 5 0 0 0-.637-.156a22 22 0 0 0-1.078-.469m-28.261.08a.195.185 43.5 0 1 .005 0a.195.185 43.5 0 0-.005.002zm.21 0a.195.185 43.5 0 1 .006 0q.235.157.51.204l.053-.006l-.05.007a1.3 1.3 0 0 1-.513-.203a.195.185 43.5 0 0-.005-.002zm14.108.133q.015.013.015.028t-.015.03a.2.2 0 0 1-.049.036a.2.2 0 0 0 .049-.035q.015-.017.015-.031q0-.016-.015-.028m3.238.082q.03.008.059.02q-.028-.012-.059-.02m-10.722.506a52 52 0 0 0-9.4 1.742q-2.703.346-4.436.85a12 12 0 0 0-1.05.355c-.008.004-.012.003-.02.006l.02-.007a12 12 0 0 1 1.05-.354q1.734-.505 4.435-.85a52 52 0 0 1 9.4-1.742zm-43.227.07a.353.396 28.7 0 0 .057.243a.353.396 28.7 0 1-.057-.243m37.014.12a.2.2 0 0 0-.069.013a.15.15 0 0 1 .069-.013m-4.237.392l-.084.028zm-32.583.164l-.006.024zm67.901.047l-.017.004zm19.494.063a.7.7 0 0 0-.167.232a.4.4 0 0 0-.02.232a.4.4 0 0 1 .02-.232a.7.7 0 0 1 .167-.232m-56.4.326l-.039.015l-.021.002l.021-.003zm59.523.297q-.032.33-.011.802l-.002.038v-.036a6 6 0 0 1 .013-.804m-60.923.289h.014zm-19.916.547a.305.24 39.6 0 1 .125.029q.273.123.686.066q.219-.028.508.09a2.2 2.2 0 0 0 .476.149q2.968.495 4.55 3.056q.17.274.675.518l2.965 3.345l2 2.944a.228.23 42.1 0 1 .011.238a2.94 2.94 0 0 1-1.084 1.15a.125.152 61.6 0 1-.2-.04l-.192-.413q-.005-.407-.336-.545a.235.273 41.8 0 0-.239.032q-1.215.794.028 1.638v.002q.099.073.078.211a.8.8 0 0 0-.22.336l.007.031l-.01-.03l-1.217 1.13a.281.284 58.5 0 1-.459-.107l-.433-1.215a.198.166 77.9 0 0-.17-.131q-.835.02-.48.877a4.6 4.6 0 0 1 .345 1.633a.383.39 61.4 0 1-.076.242a9 9 0 0 1-1.94 1.973a.132.166 53.4 0 1-.21-.004q-.103-.138-.09-.452a.24.24 0 0 0-.299-.246q-1.457.364-.176 1.303l-.28.613l-1.927 1.817a1.8 1.8 0 0 1-.402-.813a2.86 2.86 0 0 0-.582-1.306a.098.098 0 0 0-.162.01a1.8 1.8 0 0 0-.213.439q-.06.186-.21.437q-.242.409.276.536a.137.15 4.1 0 1 .104.13l.129 1.493q-.25 1.201-1.471 1.271a2.96 2.96 0 0 0-.613-1.488a.171.166 56.4 0 0-.21-.045q-.472.248-.14.812q.229.868.494 1.725q-.714.719-1.74.668a18 18 0 0 1-1.264-2.96a3.8 3.8 0 0 1-.474-1.52l-.29-.67a1.14 1.14 0 0 1-.519.033a.54.54 0 0 1-.336-.22q-.104-.149-.254-.706a3.6 3.6 0 0 1-.103-.59a4 4 0 0 1-.008-.627a4 4 0 0 0 .008.627q.028.305.103.59q.15.558.254.705a.54.54 0 0 0 .336.22q.213.047.52-.032h.002a3.7 3.7 0 0 0-.17-.819a3 3 0 0 1-.174-.8a20.3 20.3 0 0 0-.566-3.815q-.105-.425-.16-1.455c-.01.003-.02.001-.03.004l.027-.006a3.1 3.1 0 0 0-.144-1.342a.54.54 0 0 1-.018-.262q.183-.96.174-1.941a1.6 1.6 0 0 0-.137-1.088a.193.203 50.8 0 1 .028-.215a.74.74 0 0 0 .19-.61a1.8 1.8 0 0 1 .107-.954a18 18 0 0 1 1.427-2.879a4.1 4.1 0 0 1 1.178-1.234a23 23 0 0 1 2.504-1.52a.305.24 39.6 0 1 .113-.023m5.668.043q.258.349.533.681q.143.17.635.56q-.492-.39-.635-.56q-.275-.33-.533-.681m27.936.037q.528-.042.98.424a7.3 7.3 0 0 1 1.373 1.998q.046.1.16.2q.287.264.412.805q.169.734.608 1.39a.223.223 0 0 1-.145.34q-.705.126-1.06-.368a38 38 0 0 0-.487-.674a11.5 11.5 0 0 1-2.363-3.658a.287.284 68.4 0 1 .16-.373q.185-.07.362-.084m-15.882.281l.009.037zm.122.266q.005.006.012.011q-.007-.005-.012-.011m.244.087h.03zm-2.344.084l-.033.018l-.025.008c.01-.003.013-.007.023-.01zm-.488.288l-.002.005l-.002-.002zm-1.873.279a.364.385 67.6 0 1 .383.148v.002a.364.385 67.6 0 0-.383-.148l-1.336.267a1 1 0 0 1-.291.028q-.105-.01-.127-.067q.022.057.127.067q.105.008.291-.03zm49.88.105c.036.016.08.03.116.045a34 34 0 0 1 3.55 1.772q.696.401 3.403 2.043a253 253 0 0 0-3.405-2.041a34 34 0 0 0-1.748-.94a34 34 0 0 0-1.8-.832zm13.327.726q.066.07.115.108q.049.04.08.053a.3.3 0 0 1-.08-.053a2 2 0 0 1-.115-.107zm-70.037.022a.2.2 0 0 0-.064.023a.2.2 0 0 1 .064-.023m.076.002q.167.027.443.239q-.276-.211-.443-.239m-.224.135a.235.201 33.3 0 0 .066.227a.235.201 33.3 0 1-.066-.227m8.019 0v.002zm1.496.033c.07.148.137.296.225.434c.229.446.476.882.72 1.32c-.244-.438-.493-.873-.722-1.32c-.088-.138-.153-.287-.223-.434m-8.846.07q.112.083.227.157q1.014.637 1.453 1.242q-.44-.604-1.453-1.24a4 4 0 0 1-.227-.158zm7.996.032a.148.184 64.9 0 1 .204.047v.002a.148.184 64.9 0 0-.204-.05zm62.365.002l.012.004zm-25.06.46a.7.7 0 0 1 .281.136q.297.226.432.82q.84 3.762.832 3.814q-.09.642.254 1.16a.26.212 42.8 0 1 .03.233q-.241.53-.839.508a.223.201 79.1 0 1-.184-.139a7.3 7.3 0 0 1-.533-2.098a23 23 0 0 1-1.18-3.388a.605.594 54.1 0 1 .073-.475q.412-.65.834-.57zm24.185.052a.1.1 0 0 1 .053.006a.1.1 0 0 0-.053-.006m-7.273.185a17.3 17.3 0 0 1 3.512 2.377a17.4 17.4 0 0 0-3.512-2.377m-45.512.002a.174.16 35.4 0 1 .149.053q.79.766 1.402 1.691q.267.405.864 1.19q.452.587.757 1.277q.393.894-.535.402a6.6 6.6 0 0 1-1.271-.869q-.653-.564-1.856-2.576a.294.198 48.5 0 1-.033-.244l.402-.838a.174.16 35.4 0 1 .121-.086m52.205.031l.008.01h-.002zm-60.744.346a.7.7 0 0 0 .24.067a.372.375 85.6 0 1 .317.271a.372.375 85.6 0 0-.316-.27a.7.7 0 0 1-.24-.068zm-26.673.108c-.099.38-.278 1.545-.526 3.402q.374-2.81.526-3.402m87.724.787a.3.3 0 0 0-.069.101a.2.2 0 0 0-.013.106a.2.2 0 0 1 .013-.106a.3.3 0 0 1 .069-.101m-59.023.416a.262.223 45.9 0 1 .015.222q-.1.19-.253.21q.152-.02.251-.21a.262.223 45.9 0 0-.013-.222m60.847.314a3.7 3.7 0 0 0 .752.537a3.4 3.4 0 0 0-.389-.24a4 4 0 0 1-.363-.297m-68.353.07q.157.13.312.432q.157.303.313.777a.455.453 10 0 0 .148.21a2.55 2.55 0 0 1 .936 1.605a2.55 2.55 0 0 0-.937-1.605a.455.453 10 0 1-.147-.21a5.4 5.4 0 0 0-.313-.777q-.156-.302-.312-.432m66.21.407a.8.8 0 0 1-.105.234a.6.6 0 0 0-.076.15q-.03.102.017.172q-.047-.07-.017-.172a.6.6 0 0 1 .074-.15a.8.8 0 0 0 .107-.234m-.123.599a.4.4 0 0 0 .131.067a.289.254 33.3 0 0 .248-.035a.289.254 33.3 0 1-.248.035a.4.4 0 0 1-.13-.067zm-32.329.762a.4.4 0 0 1 .205.068a.182.255 15.5 0 1 .08.221q-.075.64.271 1.094q.537.708.553.74q.252.566.416 1.393q.048.245.205.435q.58.693.646 1.541q.03.39-.312.201a1.06 1.06 0 0 1-.459-.484a12 12 0 0 0-.28-.573a9 9 0 0 1-.603-1.085a7.4 7.4 0 0 1-1.29-3.414a.091.115 4.4 0 1 .12-.131l.08.035a.207.118 32.8 0 0 .145.006a.5.5 0 0 1 .223-.047m-55.494.154v.002h-.01zm5.865.26a.5.5 0 0 1 .19.07a.305.276 11.3 0 1 .146.198a.305.276 11.3 0 0-.147-.198a.5.5 0 0 0-.189-.07m0 0a.13.13 0 0 0-.117.049a.13.13 0 0 1 .117-.049m59.609.883q-.068.005-.283.201a.2.2 0 0 0-.06.107q-.022.148.136.092a.255.34 9 0 0 .17-.166q.114-.24.037-.234m23.58.36q.677.495 1.293 1.042a.082.08 39.6 0 0 .119-.01l.01-.015l-.008.015a.082.08 39.6 0 0-.002 0a.082.08 39.6 0 1-.12.01q-.615-.547-1.292-1.043zm1.9.155l-.01.028zm-67.335.282q.28.011.463.08a.54.54 0 0 1 .267.195a.54.54 0 0 0-.267-.195a1.5 1.5 0 0 0-.463-.08m22.461.324q.67-.028 1.162.902q.184.348.513.563q.243.16.13.49a.664.669 30.3 0 0 .183.713q1.315 1.175 1.492 2.279q.068.413-.268.164a23.5 23.5 0 0 1-3.216-2.877a.39.439 16.7 0 1-.108-.23q-.11-.719-.748-1.157a.29.29 0 0 1-.012-.468q.468-.362.872-.38zm-21.809 1.037l.004.01a.123.144 57.2 0 0-.002 0c-.002-.003 0-.007-.002-.01m.045.049a.123.144 57.2 0 0 .025.01a.123.144 57.2 0 1-.025-.01m.09.013a.123.144 57.2 0 1-.022.002a.123.144 57.2 0 0 .022-.002m-18.445.203a1 1 0 0 1 .11 0a.26.26 0 0 1 .15.055a.17.17 0 0 1 .052.127a.17.17 0 0 0-.053-.127a.26.26 0 0 0-.15-.055a1 1 0 0 0-.11 0zm16.234.567a.8.8 0 0 0-.186.242a.8.8 0 0 1 .186-.242M17.17 33.946h.002l-.002.004zm-.832.74a.428.292 36.1 0 1 .082.233a.428.292 36.1 0 0-.082-.233m84.968.305a.359.351 62.5 0 1 .237.078q1.95 1.57 1.88 3.951q-.037 1.199-.62 1.826q-.579.621-1.49.52q-.702-.077-1.278-.676q-1.918-1.99-.334-4.707q.547-.936 1.605-.992m-84.294.535a.276.444 6.1 0 0 .11.227a.276.444 6.1 0 1-.11-.227m60.955.426v.008l-.28.914l.278-.914q0-.005.002-.008m-43.11.06a.2.2 0 0 1-.04.024a.2.2 0 0 0 .04-.024m-17.09.12a.39.388 16.2 0 1 .013.013a.39.388 16.2 0 0-.014-.014zm.103.175a.39.388 16.2 0 1 .006.018a.39.388 16.2 0 0-.006-.018m87.265.078q.651.77 1.31 1.64q1.218 1.612 2.473 3.198q.611.843 1.033 1.508a30 30 0 0 0-1.035-1.506a182 182 0 0 1-2.473-3.197a37 37 0 0 0-1.308-1.643m-88.222.002a.7.7 0 0 1 .378.166a.6.6 0 0 1 .176.36a.11.112 87.4 0 1-.008.058a.11.112 87.4 0 0 .008-.058a.62.62 0 0 0-.176-.36a.7.7 0 0 0-.378-.166m64.24.477a7 7 0 0 1-.53.023a7 7 0 0 0 .53-.023m-63.701.121a.11.112 87.4 0 1-.032.033a.11.112 87.4 0 0 .032-.033m-.045.043a.11.112 87.4 0 1-.06.012a.11.112 87.4 0 0 .06-.012m65.974.1q.717.01 1.435.158q.72.147 1.442.433l2.408.69q1.46.338 2.809 1.004q1.487.588 2.789 1.484q.903.624 2.476 1.938a27.1 27.1 0 0 1 5.854 6.853a.262.4 60.5 0 0 .468.031q.437-.24.926-.33q.487-.087.348.215a.164.4 72.9 0 1-.196.16l-.982.469a.166.148 67.1 0 0-.066.197a8 8 0 0 0 1.076 1.965a38 38 0 0 1 2.38 7.66a.281.476 39.2 0 1-.036.248q-.177.418.03 1.365q.04.184.052.375q.03.621.158 1.246q.098.49.029.928q-.115.726-.123.938q-.462 12.178-9.281 20.148q-5.912 5.346-14.03 6.562q-.024.004-.578.164a1.16 1.16 0 0 1-.667-.01a.55.55 0 0 0-.256-.019q-2.8.481-5.086.11q-1.047-.172-1.656-.102a.5.5 0 0 1-.254-.035a11.2 11.2 0 0 0-2.655-.783a28 28 0 0 0-2.261-.977a22.8 22.8 0 0 1-7.172-4.375q-6.042-5.43-8.389-13.65a1.4 1.4 0 0 1-.049-.27q-.101-1.366-.412-2.133a4.1 4.1 0 0 1-.285-1.216l.06-.803q.076-.981-1.113-1.006q-.48-.008-.037-.193q.429-.18.94.16q.158.105.142-.074l-.193-2.02a.314.19 22.8 0 0-.14-.197q-.323-.217 0-.436a.31.439 74.2 0 0 .156-.193q.222-.71.164-1.46v-.536l-.012-.004l.012.002a19 19 0 0 1 1.002-3.611a22.4 22.4 0 0 1 2.564-7.156q.35-.164.19-.526l1.06-1.348a16.4 16.4 0 0 1 3.834-4.617v.002l1.795-1.26a.6.6 0 0 0 .21-.21q.772-.445 1.579-.82a8.7 8.7 0 0 1 2.174-1.573q2.67-1 5.283-2.14a10.4 10.4 0 0 0 2.049-.41q3.875-1.189 7.634-.676q2.018.275 3.278.255a8.6 8.6 0 0 0-1.442-.433a7.6 7.6 0 0 0-1.435-.158m-32.3.142a.276.235 50.3 0 1 .189.121a31 31 0 0 0 2.295 2.797q.458.391.865.836q.31.335.297.621q-.022.422-.578.488a.39.337 54.3 0 1-.245-.058q-1.147-.72-2.511-2.256q-.843-.945-1.127-1.68a.25.166 61.7 0 1 .021-.238l.602-.578a.276.235 50.3 0 1 .191-.053zm17.417 2.504q.203-.015.42 0q-.87-.058-1.504.35a.68.685 32.6 0 1-.01.002a.68.685 32.6 0 0 .01-.004a2.3 2.3 0 0 1 1.084-.348m-1.773.434a2 2 0 0 0-.195.01a.7.7 0 0 0-.3.105a.7.7 0 0 1 .3-.106q.09-.011.195-.01zm-26.252.295q.365-.056.918.623q.325.602.871.962q.685.455.697.465q.996.784 1.979 1.582q.266.13.431.467a.244.244 0 0 1-.228.35q-1.796-.077-2.756-1.557a.375.394 83.6 0 0-.201-.152a2.64 2.64 0 0 1-1.531-1.264a.308.34 86.1 0 0-.194-.152a1.25 1.25 0 0 1-.459-.258a.227.246 25.7 0 1-.07-.227q.178-.785.543-.84zm24.869 1.54a.356.298 23.6 0 1-.238.07q-.485-.036-.696.206q.211-.242.698-.207a.356.298 23.6 0 0 .236-.068zm-2.129.03a.223.17 70.4 0 0 .178.117a.223.17 70.4 0 1-.178-.117M12.02 43.495a7 7 0 0 1-.756.857a2.17 2.17 0 0 1-.627 1.315a.187.324 55.1 0 0-.006.007a.187.324 55.1 0 1 .004-.01q.538-.54.63-1.312q.412-.397.755-.857m49.289.19q.06.052.072.128a.4.4 0 0 1-.02.178q-.065.197-.312.484c.162-.19.269-.354.312-.484a.4.4 0 0 0 .02-.178a.22.22 0 0 0-.072-.129zm-.901.74q.186.18.344.197q-.158-.015-.344-.198zm-47.566.087c.314.841.719 1.63 1.264 2.342c-.545-.71-.95-1.5-1.264-2.342m106.624.672q2.625-.162 4.315 1.967q.085.032.078.144l1.047.754q.324.234-.065.252q-1.032.052.145.883q.353.252.5.658q.302.843.26 2.05a.41.335 32.4 0 0 .08.241q.31.411-.371.324a.38.38 0 0 0 .203.233a.6.6 0 0 1 .115.068q.174.17-.107.156q.112.75-.05 1.477a.102.091 20.4 0 1-.142.057q-.24-.123-.398.049a.19.152 50 0 0 .006.214q.692 1-.375 1.748q-.04.579-.334.135q-.82.645.09.43a.132.251 71.2 0 1 .222.035q.042.053.043.135q.676.273.49.863a.148.155 16.6 0 1-.183.104l-.852-.24l-.882 1.066a.324.34 17.8 0 1-.223.12q-.503.057-.443.362q.261.265.152.567a.246.184 2.8 0 1-.19.128a1.3 1.3 0 0 0-.476.174q-.207.348-.68.535t-1.482.803q-.342.346-.86.324l-1.054-.006q-.471-.001-1.086-.251l-2.86-1.153q-.356-.145-1.085-.72q-3.28-2.582-2.573-6.788q.003-.015.022-.341q.016-.298.265-.496l.221-.4q-.017-.649.514-1.005a.67.67 0 0 1 .213-.545a.8.8 0 0 0 .256-.726q-.112-.335-.39-.24a.128.33 17.9 0 0-.15.187l-.39.865a.305.251 3.9 0 1-.207.147q-.23.044-.174-.207q.185-.806.88-1.34a.359.268 22.9 0 1 .241-.059q.53.057.86-.355a3.6 3.6 0 0 1 1.337-1.406q1.957-1.912 4.758-1.883h.002a7 7 0 0 1 .768-.094zm-108.934.701a.187.324 55.1 0 0 0 .006l.074.59l-.076-.592a.187.324 55.1 0 1 .002-.004m69.255.66a5.6 5.6 0 0 0-.932.059q-4.352.635-7.566 3.115q-1.404 1.086-1.543 2.963q-.05.682.346 1.158a3.2 3.2 0 0 0 1.224.908q1.077.466 2.233.567l1.014.17q.524.088 1.058-.096q.308-.107 1.94.053a.166.16.1 0 1 .148.144q.162 1.708.516 3.389q.1.475.1 1.27q-.004.65.157 1.287a.407.187 27.6 0 0 .149.193l.28.219a.43.43 0 0 1-.145.324a.8.8 0 0 1 .2.088a.4.4 0 0 1 .124.12a.4.4 0 0 0-.123-.12a.8.8 0 0 0-.201-.088q-.292.355-.125.76a.7.7 0 0 1 .058.254q.003 1.28.588 2.404a.091.089 73.8 0 1-.068.13q-2.352.224-2.46.208a2.9 2.9 0 0 0-1.616.199v.002l-.123.012v-.002a2.54 2.54 0 0 0-1.498-.262q-.646.087-1.018.016a28 28 0 0 0-2.686-.371a.5.5 0 0 1-.24-.092q-.637-.437-1.38-.16l-1.339.068v-.002q-1.035.121-1.85.728q-.6.448-.773.594a2.4 2.4 0 0 0-.603.791a11 11 0 0 1-.73 1.283a2.4 2.4 0 0 0-.42 1.385q.002.527.17 1.393q.181.944.806 1.709q.015.075.067.132v.002q.09.447.507.618a9 9 0 0 0 1.723 1.24a.246.19 39.1 0 0 .24.006a.35.35 0 0 0 .108-.131a.155.246 16.5 0 1 .156-.137q.192-.02.08.158q-.42.68.252.854q2.277.588 4.617.793a.185.19 85.5 0 1 .17.139q.17.67-.291 1.162a.316.394 62.9 0 0-.102.228a47 47 0 0 0 .088 4.299q.148 2.38.948 4.469q.325.856 1.007 1.267q2.122 1.277 4.41.38q.762-.304.944-.427q.466-.312.576-.943a.94.94 0 0 1 .23-.48q.252-.277.307-.405a6.9 6.9 0 0 0 .541-3.994a13.4 13.4 0 0 0-.172-4.55a.351.198 88.8 0 0-.129-.217q-.166-.093-.226.222q-.06.3-.295.3a.174.16 85.6 0 1-.16-.151a.63.63 0 0 1 .252-.631a.244.394 67.2 0 0 .144-.203q.108-.54-.484-.455q-.207.03-.252-.053a.107.166 69.6 0 1 .129-.172q1.084-.353 2.215-.478q.438-.049 1.076-.297a3.34 3.34 0 0 1 1.582-.203q.103.01 1.203-.268l.793-.201a219 219 0 0 0 4.537-1.832a5 5 0 0 0 .639-.32a5 5 0 0 0 .586-.4l.591-.786q.203-.269.725-.63q.43-.297.707-.765a19.4 19.4 0 0 0 2.51-3.31a31 31 0 0 1 .734-2.358q.086-.242 0-.369q-.12-.17-.435-.125q-.345.05-.06-.15q.222-.156.388-.086a.148.116 25.6 0 0 .175-.037q.45-.816.082-1.711q-.168-.416-.787-1.385q-.787-1.241-2.088-1.076a.385.346 55 0 1-.242-.055q-.283-.185-.56-.123v-.002q-2.392.525-4.533 2.315a1.5 1.5 0 0 1-.502.275q-1.427.453-2.875 1.274a34 34 0 0 0-3.48 1.466q-.022.01-.557.407q-.338.252-.83.14a1.6 1.6 0 0 1-.413-1.058v-.002q.191-.65-.255-1.147l-.012-1.193a28.3 28.3 0 0 0-.908-6.037q-.044-.49-.787-.766q-.153-.054.002-.097q1.255-.353 2.558-.674q.874-.218 2.707-1.508q1.32-.925 1.627-2.686q.26-1.475-.639-2.252q-.437-.375-1.884-.945a11.4 11.4 0 0 0-1.762-.533h-.002a5 5 0 0 0-.883-.102m11.688 26.09a5.3 5.3 0 0 1-1.225.72a219 219 0 0 1-4.537 1.833l-.83.592a.31.902 62.2 0 0-.38.4q-.292.798.278.46q.765-.45 1.592-.76q1.346-.504 1.635-.643a30 30 0 0 0 5.011-3.06a.16.193 58.7 0 0 .075-.208q-.12-.284-.432.059q-.447.492-1.187.607m20.701-26.027a.32.32 0 0 1-.002.195a.3.3 0 0 1-.045.088h-.002a.3.3 0 0 0 .047-.088a.32.32 0 0 0 .002-.195M9.88 47.11l-.017.025zm4.809.25h.002q.33.27.377.74q.023.216.11.307h-.003q-.085-.09-.107-.307a1.05 1.05 0 0 0-.38-.74zm-5.215.637l-.006.023l-.006.01l.004-.01zm-.248.521l-.004.022zm70.531.276a.4.4 0 0 1 .076.083a.4.4 0 0 0-.076-.084zm-70.162.03h.022q-.018 0-.035.003l.013-.002zm-.385.266l.002.01v.002l-.578.848a.324.362 56.3 0 0-.004.01a.324.362 56.3 0 1 .002-.01l.578-.85zm70.629.106a.078.082 14.1 0 0 .004.01a.078.082 14.1 0 1-.004-.01m2.805.191h.002a.13.158 48.4 0 1 .007.012a.13.158 48.4 0 0-.01-.012zm.017.026a.13.158 48.4 0 1 .006.013a.13.158 48.4 0 0-.006-.013m.01.029a.13.158 48.4 0 1 .002.031a.13.158 48.4 0 0-.002-.031m-.477.18a.642.645 19 0 1-.136.134a.642.645 19 0 0 .136-.134m-.156.15a.642.645 19 0 1-.178.086a.642.645 19 0 1-.203.027a.642.645 19 0 0 .203-.027a.642.645 19 0 0 .178-.086m-73.466.414a1.4 1.4 0 0 1-.057.578q-.09.3-.3.627l-.008.012l.005-.012a2.4 2.4 0 0 0 .303-.627q.09-.301.057-.578m.586.082q-.401.701-.565 1.197q.163-.496.565-1.197m30.89.055a1.2 1.2 0 0 1 .404.049q1.236.363 1.141 1.164a.321.323 19.4 0 0 .145.304q.618.396.505.94q-.077.372.188 1.474a2.2 2.2 0 0 1-.266 1.723a4.54 4.54 0 0 1-1.498 1.533a.33.303 34 0 1-.242.037l-1.73-.39a.38.433 79.5 0 1-.215-.127q-1.52-1.788-1.008-4.09a3.4 3.4 0 0 0 .043-.73q-.015-.482.299-.717a8.6 8.6 0 0 1 1.838-1.077q.196-.082.396-.093m16.711.517q.205.235.172.319q.032-.084-.172-.319m.168.323q-.017.037-.086.043q.07-.005.086-.043m52.525.195q-.432.913-.445 1.785q-.004.291.039.576a.447.466 52.2 0 1-.04.254q-.21.448-.208.744q-.002-.297.209-.744a.447.466 52.2 0 0 .037-.254a3.6 3.6 0 0 1-.037-.576q.012-.87.443-1.783zm-30.865.266l.01.003a.04.04 0 0 0-.02 0c.004 0 .007-.004.01-.003m-.022.007l-.007.004v-.002c.002-.002.005 0 .007-.002m-.039.036a.082.265 29.1 0 1-.074.091a.082.265 29.1 0 1-.064.041a.082.265 29.1 0 0 .064-.04a.082.265 29.1 0 0 .074-.092m.123.072a.089.105 58.8 0 1-.003.008a.089.105 58.8 0 0 .003-.008m-22.501.072a1 1 0 0 0-.2.123a.8.8 0 0 0-.252.357a.8.8 0 0 1 .452-.48m-.432.09a.281.47 66 0 1-.148.209a.281.47 66 0 0 .148-.21zm21.969.316q-.012.055-.028.108q.015-.052.028-.108m-2.918.131a.6.6 0 0 0 .047.133a.7.7 0 0 0 .078.127q.013.019.03.037q-.017-.018-.03-.037a.8.8 0 0 1-.106-.193zm-19.651.619a.196.214 23.6 0 0 .004.01a.196.214 23.6 0 1-.004-.01m19.92.078a.463.351 10.4 0 0-.115.04a.463.351 10.4 0 1 .115-.04m-.137.05a.463.351 10.4 0 0-.091.066a.463.351 10.4 0 1 .091-.067zm-69.538.833h.002v.006zm71.4.098a.289.385 30.9 0 1-.032.012a.289.385 30.9 0 0 .032-.012m-69.742.322l-.035.104l.035.027l-.035-.025l-.012.017l.01-.02c.015-.042.023-.061.037-.103m-.414.84l-.012.037zm46.908.39q.285.03.334.1q.023.035-.012.078q.034-.044.012-.078q-.048-.07-.334-.1m-47.07.448v.015q-.005.086-.719 2.49l-.008.028l.006-.027q.714-2.405.719-2.49zm100.5.515q-.09.047-.122.303a.346.262 34.5 0 0 .078.236q.105.127.156.25a.56.56 0 0 1-.004.479a.9.9 0 0 1-.16.229a.22.27 56.7 0 0-.074.226a.6.6 0 0 0 .059.152h-.002a.6.6 0 0 1-.057-.152a.22.27 56.7 0 1 .072-.226a.9.9 0 0 0 .162-.229a.56.56 0 0 0 .004-.479a1 1 0 0 0-.158-.25a.346.262 34.5 0 1-.078-.236q.033-.256.123-.303zm18.859.444a.105.094 23.4 0 1 .003 0a.105.094 23.4 0 0-.006.004a.105.094 23.4 0 1 .002-.004zm-18.372.166q.06.069.127.062q-.067.008-.127-.062m18.524.096q.057.001 0 .007q.056-.005 0-.007m-18.328.707q.052.04.105.127a.223.326 30.4 0 1 .016.244a.223.326 30.4 0 0-.018-.244a.5.5 0 0 0-.103-.127m-54.347.951a.26.26 0 0 1 .19.052a.166.239 27 0 1 .031.235a.166.239 27 0 0-.031-.235a.26.26 0 0 0-.19-.052m-.003.002a.212.201 4 0 0-.182.15a.212.201 4 0 1 .182-.15m54.765.152l.002.002q.239.685.402 1.375a13.2 13.2 0 0 1 .315 4.211l-.21 2.498h-.001l.209-2.5a13.2 13.2 0 0 0-.312-4.209q-.165-.691-.405-1.377m-102.445.117l-.004.053zm104.417.225l1.924 1.85l-1.924-1.848zm-.173.29v.003v-.002zm-104.246.167l.002.025a.105.077 78.1 0 0 .004.018a.105.077 78.1 0 1-.006-.018zm.018.08a.105.077 78.1 0 0 .012.016a.105.077 78.1 0 1-.012-.016m87.648.726a.394.407 21.6 0 1-.23.106a.394.407 21.6 0 0 .23-.106m.644.258a.23.268 14.2 0 0 .106.213a.23.268 14.2 0 1-.106-.213m1.695.112a.18.174 48.1 0 1 .122.058v.002a.18.174 48.1 0 0-.247-.017a.18.174 48.1 0 1 .125-.043m-2.734.103a4 4 0 0 1 .56.033a5 5 0 0 1-.374-.03a4 4 0 0 0-.723.042q-.176.026-.348.07q-.17.046-.336.108a3.6 3.6 0 0 0-.646.314a3.6 3.6 0 0 1 .646-.314a3.4 3.4 0 0 1 .684-.178a4 4 0 0 1 .537-.045m1.139.15a1 1 0 0 1 .148.07a1 1 0 0 0-.148-.07m-40.906.008v.032l.002.01l-.004-.01zm41.226.254a.3.3 0 0 1 .022.117a.3.3 0 0 0-.022-.117m-42.298.1l.002.012h-.002c-.002-.006.001-.007 0-.012m43.323.062a.166.193 65.9 0 1 .09.067a.166.193 65.9 0 0-.213-.065a.166.193 65.9 0 1 .123-.002m-.39.117a1.4 1.4 0 0 0-.358.274a1.4 1.4 0 0 0 .18-.16q.084-.063.178-.114m19.847.518q1.125.434 2.059.883a.3.305 9.5 0 0 0 .002a28 28 0 0 0-2.059-.885m-25.689.049a12 12 0 0 1-1.123.787a7 7 0 0 1 .389-.252q.63-.44.734-.535m2.721.406a.125.284 49.3 0 1-.002.004a.125.284 49.3 0 0 .002-.004m3.191.033a.212.209 32.7 0 0 .01.045a.212.209 32.7 0 1-.01-.045m-3.607.09a.125.284 49.3 0 0-.006.012a.125.284 49.3 0 1 .006-.012m.287.04a.125.284 49.3 0 0 0 .001a.125.284 49.3 0 1-.01.006a.125.284 49.3 0 0 .01-.008zm-.166.099a.125.284 49.3 0 1-.016.006a.125.284 49.3 0 0 .016-.006m-39.502.244a.442.401 32 0 0 .002 0a.442.401 32 0 0-.002.004a.442.401 32 0 1 0-.004m39.426.355a5 5 0 0 0-.49.99a5 5 0 0 0-.116.352a.73.73 0 0 0 .006.432a.73.73 0 0 1-.006-.432a5 5 0 0 1 .254-.693a5 5 0 0 1 .352-.649m-39.58.006q.015.174.076.356a.292.533 27.5 0 1 .006.252l-.129.595a.415.17 56.5 0 0 .05.25a.415.17 56.5 0 1-.052-.25l.129-.593a.292.533 27.5 0 0-.006-.252a1.5 1.5 0 0 1-.074-.358m39.125.143h.002l-.012.014zm-4.1.13a.8.8 0 0 0-.248.022a1 1 0 0 0-.242.098a1 1 0 0 1 .242-.098a.8.8 0 0 1 .248-.021zm-7.72.413h.005l-.011.004zm16.792.123a.148.17 21.6 0 1 .002.004h-.002a.148.17 21.6 0 0 0-.004m-1.308.23a.235.758 40.2 0 1 .004.014a.235.757 40.2 0 0-.004-.014m-7.215.243a.292.287 80.6 0 1 .174.054a.292.287 80.6 0 0-.174-.052h-.041zm7.16.025a.235.758 40.2 0 1-.033.066a.235.757 40.2 0 0 .033-.066m-6.98.035a.292.287 80.6 0 1 .107.149a.292.287 80.6 0 0-.107-.149m.793.281h.03zm-.532.071l.018.008zm-35.925.15q-.002.135-.172.46q.17-.326.172-.46m37.386.25a.321.268 57 0 1-.03.24a.321.268 57 0 0 .03-.24m4.477.055a.235.758 40.2 0 1-.016.006a.235.757 40.2 0 0 .016-.006m-.166.002a.235.757 40.2 0 0 .002.004a.235.757 40.2 0 0 .004.002a.235.758 40.2 0 1-.006 0a.235.758 40.2 0 1 0-.006m-25.994.277q-.04.073-.168.111q.127-.04.168-.11zm19.045.188a.112.118 10.1 0 0-.018.011a.112.118 10.1 0 1 .018-.011m-19.432.004a.091.089 70.6 0 0 .002 0a.091.089 70.6 0 0 .004.087l-.002-.002a.091.089 70.6 0 1-.004-.086zm10.291.021a.164.16 8.3 0 1 .008.002a.164.16 8.3 0 0-.008 0h-.037zm15.142.023l-.017.006zm-15.615.032l-.048.015zm-41.874.002q1.98.053 3.529.806q.332-.144.547.13a.39.171 4.8 0 0 .205.11l.338.087a.128.182 10.9 0 1 .088.195q-.14.792.572 1.138q.512.44 1.04.85q.179.135.2.262a.3.3 0 0 1-.068.252a.134.15 41.2 0 0 .002.183q.29.3.293.729a.401.487 23 0 0 .07.244a3.65 3.65 0 0 1 .592 1.629q.121.275.314.502a.157.423 2.2 0 1 .076.236l.211 1.72q.034.265-.017.401a40 40 0 0 1-.692 1.82l-.402 1.098q-.696 1.91-2.488 3.115a1.1 1.1 0 0 0-.295.293q-.367.524-.904.536a.6.6 0 0 0-.25.052q-1.617.765-3.043.66q-.471-.034-.578.338a.086.093 23.7 0 1-.135.059q-.722-.454-1.295-.328q-.63.135-1.037.111a31 31 0 0 0-.606-.031a3.1 3.1 0 0 1-1.763-.527a20 20 0 0 1-.813-.565a1.95 1.95 0 0 1-.6-.818a.24.246 84.1 0 0-.181-.145l-.47-.086a.364.298 73.9 0 1-.208-.142l-1.463-2.11a.412.405 45.7 0 1 0-.474q.165-.228-.027-.366q-.701.207-.559-.406a.54.54 0 0 0-.007-.254a.93.93 0 0 1 .1-.742l.468-2.342a1.6 1.6 0 0 1 .277-1.35l.258-.857q.808-2.845 3.154-4.627q.255-.421.725-.59q1.252-.565 3.473-.753q.709-.06 1.369-.043m53.771.049q-.185.186-.41.336v-.002q.225-.149.41-.334m.984.011l1.121.975a.281.31 64.8 0 0 .229.07a.281.31 64.8 0 1-.229-.068zm-13.086.016l-.035.018zm7.115.154a.091.16 87 0 1 .028.016a.091.16 87 0 0-.028-.016m-7.384.162v.008zm17.925.014l-.013.008zm.21.031l.01.004a.18.198 23.4 0 0 0 .002zm-10.854.004c-.1.046-.2.094-.291.15a2.4 2.4 0 0 0 .29-.15zm-14.088.09a.466.415 44.2 0 0 .25.01a.466.415 44.2 0 1-.25-.01m22.135.037a.182.278 29.5 0 1-.002.006a.182.278 29.5 0 1-.006.01a.182.278 29.5 0 0 .004-.01a.182.278 29.5 0 0 .004-.006m-20.514.037a.112.107 24.2 0 0 .002 0a.112.107 24.2 0 1 .004.01a.112.107 24.2 0 0-.006-.01m15.697 0a2.6 2.6 0 0 0-.271.326a2.3 2.3 0 0 0-.344.735a2.4 2.4 0 0 0-.07.408a.4.4 0 0 0 .004.129q.01.048.04.066t.079.004a.4.4 0 0 0 .115-.057a2.5 2.5 0 0 0 .434-.365a2.5 2.5 0 0 1-.434.365a.4.4 0 0 1-.115.057q-.048.014-.078-.004t-.041-.066a.4.4 0 0 1-.004-.13a2.3 2.3 0 0 1 .414-1.143q.12-.169.271-.325m-16.941.063a.3.3 0 0 1 .067.015a.2.2 0 0 0-.13-.014a.2.2 0 0 1 .063-.002zm1.258.048a.112.107 24.2 0 1-.002.012h-.002a.112.107 24.2 0 0 .004-.012m18.656.063a.24.24 0 0 0-.209.11a2 2 0 0 0-.275.654a2 2 0 0 0-.04.24a.303.251 80.3 0 1-.003.006a.303.251 80.3 0 0 .002-.006a2.2 2.2 0 0 1 .107-.469a2 2 0 0 1 .21-.426a.24.24 0 0 1 .208-.11zm.457.08a.54.54 0 0 1 .342.31a.54.54 0 0 0-.197-.24a1 1 0 0 0-.145-.07m-17.414.055q.096.051.19.078a.7.7 0 0 0 .37.008a.8.8 0 0 0-.185.021a.7.7 0 0 1-.185-.03a1 1 0 0 1-.19-.077m1.881.068a.38.228 74.8 0 1-.064.229a.38.228 74.8 0 0 .064-.229m6.094.06l-.002.007a7 7 0 0 0-.567.785a7 7 0 0 1 .268-.4q.141-.198.299-.385h-.002l.004-.006zm-11.381.012a1 1 0 0 0-.16.073a1 1 0 0 0-.123.082a.5.5 0 0 0-.09.095a.4.4 0 0 0-.074.227a.5.5 0 0 0 .015.13a.5.5 0 0 1-.015-.13a.4.4 0 0 1 .164-.322a1 1 0 0 1 .123-.082q.071-.039.16-.073m-3.203.114l-.033.017zm21.961.054a.9.9 0 0 1 .44.107a1 1 0 0 1-.212-.081a1 1 0 0 0-.228-.026m0 0q-.121 0-.252.03a3 3 0 0 0-.393.14a1.7 1.7 0 0 0-.3.168q.126-.09.3-.168q.173-.078.393-.14a1.2 1.2 0 0 1 .252-.03m-19.395.07a.36.36 0 0 1-.158.077a.7.7 0 0 1-.227.008l-.138-.016c.052.006.085.007.14.014a.7.7 0 0 0 .225-.006a.4.4 0 0 0 .158-.076zm8.785.008a1.4 1.4 0 0 0 .239.229a.6.6 0 0 0 .113.06a.35.35 0 0 0 .326-.023a.35.35 0 0 1-.326.023a.6.6 0 0 1-.113-.06a1 1 0 0 1-.118-.098a2 2 0 0 1-.12-.13zm-11.56.004c-.006.006-.014.008-.02.014v-.002zm6.558.004a.148.144 16 0 1 .053.004a.148.144 16 0 0-.172.094a.148.144 16 0 1 .12-.098zm20.127.01l.006.006l-.014-.004zm-26.04.002a.85.85 0 0 1 .48.148a.82.82 0 0 0-.584-.143q-.105.014-.217.05a1.1 1.1 0 0 1 .32-.055zm12.113.01h.002l-.004.006zm-1.984.164a.7.7 0 0 1 .16.01a.56.56 0 0 1 .263.123q.057.048.103.113a1 1 0 0 1 .084.148q.039.084.067.184a.265.308 50.8 0 1-.043.236a.265.308 50.8 0 0 .043-.236a1.3 1.3 0 0 0-.067-.184a1 1 0 0 0-.084-.148a.6.6 0 0 0-.226-.194a.6.6 0 0 0-.14-.043a.7.7 0 0 0-.16-.01zm1.806.002a2.5 2.5 0 0 0-.309.236a2.3 2.3 0 0 0-.637.951h-.001q.069-.189.164-.357a2.3 2.3 0 0 1 .783-.83m-10.643.085a.12.152 19.5 0 1 .06 0a.12.152 19.5 0 0-.16.1a.12.152 19.5 0 1 .1-.1m.907.255a.257.193 7.9 0 1 .171.168a.257.193 7.9 0 0-.171-.168m10.765.08a14 14 0 0 1-.59 1.326a14 14 0 0 0 .59-1.326m-10.592.1a.26.26 0 0 1-.017.144a.26.26 0 0 0 .017-.145zm4.973.025a.08.086 14.1 0 1 .008.004a.08.086 14.1 0 0-.008-.002h-.014zm.074.056a.08.086 14.1 0 1 .004.022a.08.086 14.1 0 0-.004-.022m18.465.167a.3.3 0 0 1 .014.116a.5.5 0 0 1-.038.15a.25.41 75.8 0 1-.175.18a.25.41 75.8 0 0 .175-.18a.5.5 0 0 0 .038-.15a.3.3 0 0 0-.014-.117zm-6.354.214a.24.24 0 0 0-.203.15a.24.24 0 0 1 .203-.15m-34.677.043a.346.342 25.3 0 0 .184.197h-.002a.346.342 25.3 0 1-.182-.197m18.668.04a.174.246 47.3 0 1 .006 0a.174.246 47.3 0 0-.006.001l-.074.055q.036-.03.074-.057zm3.357.105a.396.37 62.4 0 1-.066.242a.396.37 62.4 0 0 .066-.242m-31.605.086a.19.16 4 0 0-.172.125a.19.16 4 0 1 .172-.125m33.797.234h.002zm-7.46.101a.7.7 0 0 0-.171.159a.4.4 0 0 0-.08.173a.4.4 0 0 0 .01.192a.7.7 0 0 0 .101.21q.083.128.166.22a2 2 0 0 1-.168-.22a.7.7 0 0 1-.1-.21a.4.4 0 0 1-.01-.192a.4.4 0 0 1 .08-.173a.7.7 0 0 1 .173-.159zm3.26.036l-.021.052zm-.048.144l-.008.033a.72.704 75.3 0 1-.203.358H71.6a.72.704 75.3 0 0 .203-.358zm14.115.078a.7.7 0 0 0-.098.198a.5.5 0 0 0 .033.384a.52.52 0 0 1-.033-.385a.7.7 0 0 1 .098-.197m-16.172.08a.359.251 57.6 0 1-.012.233a.359.251 57.6 0 0 .012-.233m-17.006.07a.246.182 56.9 0 0 0 .01a.246.182 56.9 0 1 0-.01m64.625.018q-.001.165-.116 2.045l-.001.002q.116-1.88.117-2.047m-74.64.024q.037.27-.02.316q-.059.045-.21-.137q.151.181.21.137q.057-.045.02-.316m10.062.131a.246.182 56.9 0 0 .004.005a.246.182 56.9 0 0-.002 0a.246.182 56.9 0 1-.002-.005m28.56.066a10 10 0 0 1-.586 1.373a10 10 0 0 1 .586-1.373m-15.019.082a.316.244 9.2 0 0-.21.115a.316.244 9.2 0 1 .21-.115m13.129.03a7 7 0 0 0-.78 1.364q-.145.809-.312.067a.4.4 0 0 0 .313-.067a7.2 7.2 0 0 1 .779-1.365zm11.029.077a.808.811 42.3 0 0-.072.375a.808.811 42.3 0 0 .105.366a.808.811 42.3 0 1-.105-.366a.808.811 42.3 0 1 .072-.375m-20.941.25l-.063.065zm-1.19.012a.28.28 0 0 0-.27.08a13 13 0 0 0-.972 1.157a13 13 0 0 1 .973-1.156a.28.28 0 0 1 .27-.08zm4.977.035a.337.278 52.9 0 0-.01.243l.164.468v.006l-.002-.006l-.162-.468a.337.278 52.9 0 1 .01-.243m-4.757.032a1 1 0 0 1 .116.054a1 1 0 0 0-.117-.054zm-1.218.148q-.157.274-.334.502q-.056.076-.375.316q.32-.24.375-.316q.178-.228.334-.502m1.506.084a.3.3 0 0 1 .02.102a.4.4 0 0 1-.02.119a.4.4 0 0 0 .02-.12a.3.3 0 0 0-.02-.1zm1.988.051l-.029.047zm6.184.1l-.082.128q.044-.066.082-.129zm-2.104.01a1.9 1.9 0 0 0-.49.509q-.067.106-.187.687q.119-.58.185-.687a1.9 1.9 0 0 1 .492-.51zm-5.894.025h.002a.207.185 60.3 0 0-.047.21a.207.185 60.3 0 1 .045-.21m5.23.045a6 6 0 0 1-.591 1.24a1.4 1.4 0 0 1-.272.316a1.3 1.3 0 0 0 .146-.145q.069-.079.126-.171a6.3 6.3 0 0 0 .591-1.24m-1.289.158a.8.8 0 0 1 .244.043a1 1 0 0 0-.166-.037a.6.6 0 0 0-.15 0a.5.5 0 0 0-.254.117a.7.7 0 0 0-.103.117a.7.7 0 0 1 .103-.117a.5.5 0 0 1 .326-.123m-19.714.228a.262.26 7 0 0 .004.006a.262.26 7 0 1-.004-.006m-.327.168q.187.398-.134.688q.322-.29.134-.688m17.471.262a.407.388 78.4 0 1-.133.215h-.002a.407.388 78.4 0 0 .135-.215m-1.615.082a2.3 2.3 0 0 0-.395.451a2 2 0 0 0 .18-.234q.099-.114.215-.217m16.451.04a.594.592 41.7 0 0-.049.264a.594.592 41.7 0 1 .049-.263zm-14.643.018a.257.225.1 0 0-.162.145a.257.225.1 0 1 .162-.145m14.596.272a.594.592 41.7 0 0 .076.252a.594.592 41.7 0 1-.076-.252m-41.761.037l-.012.01zm9.148.022q-.053.185-.14.236q.087-.048.14-.236m13.543.029a1.33 1.33 0 0 1-.648.486a1.7 1.7 0 0 1-.432.09a.086.093 74.6 0 0-.01.004a.086.093 74.6 0 1 .01-.006q.234-.018.431-.088a1.33 1.33 0 0 0 .649-.486m3.678.146h.002l-.041.045zm-17.59.01q.13.103.222.057q-.092.047-.222-.057m.673.229l.296.21q.11.12.2.254a2.4 2.4 0 0 0-.202-.251a8 8 0 0 0-.293-.213zm20.924.052a1.4 1.4 0 0 0-.205.149a.34.34 0 0 0-.095.125a.4.4 0 0 0-.012.226a.4.4 0 0 1 .012-.227a.34.34 0 0 1 .095-.124q.075-.069.205-.149m2.213.02l-.05.111zm-11.043.154a.086.093 74.6 0 0-.011.022a.086.093 74.6 0 1 .011-.022m20.24.059l-.03.021zm-.224.123l-.016.008c-.01.003-.014.002-.023.006l.023-.008zm-9.162.033l-.057.092q.03-.045.057-.092m-21.879.243q-.021.15-.078.21q.058-.06.078-.21m15.1.019l-.061.093zm6.562.066l-.066.086zm-4.772.037a.372.337 7.7 0 1-.193.135a.372.337 7.7 0 0 .193-.135m7.268.102a.278.433 49.2 0 0-.074.242l.047.52v.021l-.002-.021l-.045-.52a.278.433 49.2 0 1 .074-.242m-4.475.03a.142.144 56.1 0 1-.003.007a.142.144 56.1 0 0 .003-.008zm-.058.064a4 4 0 0 0-.346.205a3 3 0 0 0-.299.226a3 3 0 0 1 .3-.226q.16-.108.345-.205m-6.555.111a1.7 1.7 0 0 1-.256.357a2 2 0 0 1 .139-.168q.064-.089.117-.19zm4.338.105l-.035.055a.337.335 31 0 0-.002 0zm-2.627.037l-.025.05a2.4 2.4 0 0 1-.188.269l-.01.015c.004-.005.004-.01.008-.015q.155-.206.188-.27zm-15.34.42a.116.196 45.3 0 0-.054.198a.116.196 45.3 0 1 .054-.198m12.989.133a.094.104 50.4 0 0-.004.016a.094.104 50.4 0 1 .004-.016m5.865.155a.12.182 35.6 0 0 0 .019a.12.182 35.6 0 1 0-.02zm2.556.253q-.106.39-.22.774q-.239.793.562 1.117a.305.3 1.4 0 1 .172.18q.29.794-.262.341q-.72-.587-.45.32q.315 1.07.288 2.19a.428.385 30.7 0 0 .074.24q.439.641.305 1.45q-.04.25.248 1.26a.39.265 89.7 0 0 .143.21q.203.126.3-.111a.6.6 0 0 0 .018-.316a10.6 10.6 0 0 1-.107-2.516q-.176-1.811-.309-4.08a.86.86 0 0 0-.11-.377q-.232-.417-.105-.625q.988-.084 1.744.785q.285.324.793.19a.126.155 75.2 0 1 .182.084a.5.5 0 0 1 .004.2a.255.5 25.6 0 0 .006.257q.956 2.673.803 5.466q-.134 2.466-.153 2.63a5.4 5.4 0 0 1-.965 2.509q-.441.62-1.19.889a2.63 2.63 0 0 1-1.417.105q-.953-.184-1.514-.924q-.462-.607-.884-1.763a5.1 5.1 0 0 1-.311-1.985q-.27-1.378-.53-2.76l.118-.855a.337.223 37.3 0 0-.08-.226q-.27-.331-.028-.713q.413-.176.284-.684a4.4 4.4 0 0 1-.133-1.076q0-.56.353-.979q.899-1.072 2.371-1.207m-30.122.811l-.024.127q.013-.063.024-.127m38.001.424a2.4 2.4 0 0 0-.539.068q-.944.23-1.92.291q-.785.174-.396.748a.24.268 74.8 0 0 .215.106q1.447.005 2.857-.319q.653.086 1.086-.384q.283-.308-.135-.368l-.86-.123a2 2 0 0 0-.308-.02zm-27.814.183a.112.123 58.6 0 1-.02.075h-.001a.112.123 58.6 0 0 .021-.075m16.705 2.418a.128.14 9.8 0 0-.018.014a.128.14 9.8 0 1 .018-.014m7.734.559a.153.13 25.8 0 1 .01.002a.153.13 25.8 0 0-.018.004a.153.13 25.8 0 1 .008-.006m.264.16v.008zm36.355 2.168c-.184.775-.37 1.541-.57 2.244h-.002c.2-.703.388-1.469.572-2.244m-44.314.275q.144-.004.346.139a.14.14 0 0 1 .027.207q-.415.51-.613.06a.292.265 49.6 0 1 .008-.25q.088-.152.232-.156m29.804 1.569q-.456.538-.931 1.035h-.002q.476-.497.933-1.035M33.08 84.819l.026.002c-.009-.002-.017.001-.026 0l-.068.002zm65.944 1.222a23 23 0 0 1-3.025 2.355q-.839.55-1.798 1.09v-.002a31 31 0 0 0 1.797-1.087a23 23 0 0 0 3.025-2.356zm15.071 1.977q.063.25.323.426v.002a.74.74 0 0 1-.323-.428m-.509.994h.002q-.14.179-.217.418q-.077.24-.09.539c0 .004-.006.013-.006.017l.004-.017q.015-.3.092-.54q.076-.239.215-.417m-57.057.562a7.8 7.8 0 0 1 1.584.98v.003a7.7 7.7 0 0 0-1.584-.983m42.957.067q-1.074 1.095-2.17 1.95a16.6 16.6 0 0 1-2.213 1.474v-.002q1.118-.615 2.213-1.471q1.096-.856 2.17-1.951m-43.134.137q.226.011-.06.468q-1.465 2.314-1.606 2.867a2.83 2.83 0 0 1-1.051 1.604a.63.63 0 0 1-.371.146q-.447.019-.166-.529q.48-.53.681-1.213q.456-1.53 1.159-2.967q.1-.457.623-.318a.993 1.004 43.8 0 0 .582-.016a.6.6 0 0 1 .209-.043zm56.708.892c-.144.32-.356.713-.646 1.191a.19.217 41.1 0 0 0 .229q.217.29.623.14q-.407.15-.625-.138a.19.217 41.1 0 1 0-.23q.433-.714.648-1.192m-53.761 1.031l.148.137zm-14.46.137q.378.026.1.285a3.43 3.43 0 0 0-1.005 1.742q-.043.18-.39.428a.324.332 78.3 0 0-.137.203a4.17 4.17 0 0 1-1.133 2.069a.203.225 33.8 0 1-.225.056q-.498-.182-.289-.781q.201-.583.672-.711a.093.107 67 0 0 .068-.146l-.103-.163a.332.23 41.7 0 1-.057-.232q.178-.778.574-1.475q.493-1.378 1.924-1.275zm31.979 1.158q.945.064 1.897 0q.763.12 1.527.235q.142.022.897.017q-.755.006-.897-.015q-.764-.117-1.527-.237q-.952.064-1.897 0m34.715.473a2.6 2.6 0 0 0-.191.715l-.004.008l.002-.008q.053-.403.193-.715M6.943 95.424l.493.47v.003l-.492-.471a.198.305 18.5 0 0 0-.002zm22.917.049q.265.015.094.332a10 10 0 0 0-.823 1.3a8 8 0 0 1-.82 1.278a33 33 0 0 0-1.6 2.139q-.193.179-.279.011a.22.33 37.4 0 1 .018-.25q1.11-2.412 3.168-4.71a.308.3 22 0 1 .242-.1m57.628.416a35 35 0 0 1-5.177.715l.388.18a.223.137 18.6 0 1 .133.16q-.009.527-.371 1.136q-.339.575-.494 1.656h-.002l-.242.92a.196.22 4.3 0 1-.16.155l-.909.156a.198.227 69.5 0 1-.213-.08q-.3-.434-.082-.95h.002a.53.53 0 0 1 .461-.289a.08.08 0 0 0 .069-.117q-.197-.423.132-.949a4.9 4.9 0 0 0 .635-1.572a.64.64 0 0 1 .586-.428l.067.022a34.6 34.6 0 0 0 5.177-.715m8.872.77q.085-.004.241.105a.439.244 48.5 0 0 .24.086l.5-.022a.112.102 2.6 0 1 .118.117q-.112.605-.719.858a.203.203 0 0 1-.27-.12q-.37-1.013-.11-1.025zm-28.913.853l.065.031l.021.016l-.021-.014zm28.602.226q.03-.022.084.002a.128.193 7.1 0 1 .084.166q0 .554.771.452a.18.177.3 0 1 .201.2a22 22 0 0 1-.74 3.237q-.225.728-.764-.105a.83.824 34.7 0 1-.115-.62q.078-.37.186-1.068a4 4 0 0 1 .22-2.014a.7.7 0 0 0 .034-.158q.007-.069.039-.092m-26.89.6l.027.008l.062.021c-.02-.008-.042-.011-.062-.02zm8.479 1.162c.19.013.26.02.46.033l.093.02c-.031-.007-.064-.01-.095-.018c-.283-.02-.194-.017-.457-.035zm1.782.274l.082.011v.002zm.607.195l.032.004zm27.744.119a2 2 0 0 1-.293.375a3.3 3.3 0 0 0-.535.687h-.002q.177-.32.535-.687a2 2 0 0 0 .295-.375m-47.427.469q.305-.037.701.093a.118.118 0 0 1 .068.166a31 31 0 0 0-1.332 2.842q-.797 1.955-2.32 3.192q-.428.345-.324-.196q.152-.799.685-1.008a.126.134 67.9 0 0 .077-.17l-.15-.4a.33.314 46.5 0 1 0-.246a23 23 0 0 1 2.081-3.893q.23-.347.514-.38m10.652 1.109q.287-.054.152.41a16 16 0 0 1-.593 1.678q-.083.198-.45 1.256a5.6 5.6 0 0 1-.59 1.209q-.427.666-.597.845a1.9 1.9 0 0 1-.94.524q-.472.115-.232-.307q.084-.141.319-.275a.265.287 78.6 0 0 .138-.194a7.1 7.1 0 0 1 .947-2.445q.217-.766.637-1.437q.246-.792.97-1.172a1 1 0 0 1 .24-.092zm19.72.785a33 33 0 0 1-2.44 1.432a10 10 0 0 1-.37 1.265q-.209.571-.31 1.262a7 7 0 0 1-1.034 2.762q-.427.672-.693-.076q-.283-.797.158-1.977q.285-.768.487-1.562v-.002q.364-1.049.412-1.405q.128-.935 1.32-1.13a.193.207 4.6 0 1 .211.263l-.182.6q1.252-.664 2.442-1.432zm-78.612.203a1.3 1.3 0 0 1 .496.026q.677.166.717.172v.002a30 30 0 0 1-.717-.172a1.4 1.4 0 0 0-.496-.028m2.41.666c.215.11.446.234.59.276v.002c-.145-.042-.374-.167-.59-.278m32.236.61a.33.33 0 0 1 .307.435a3.4 3.4 0 0 1-.772 1.283a5.9 5.9 0 0 0-1.18 1.788a.455.294 59.5 0 0-.011.253q.134.554-.639.954q-.497.259-.582-.297q-.069-.45.278-1.229q.986-2.239 1.37-2.633q.557-.57 1.23-.554zm38.777 1.466a1.5 1.5 0 0 0-.324.11v-.002q.162-.074.324-.108m-71.905.018q.438.314.632.59q-.193-.276-.632-.59m7.271.162c.27.126.541.245.8.395v.002c-.26-.15-.53-.271-.8-.397m57.199 2.033q.762.004.271.946h.002a16 16 0 0 1-1.207 1.927q-.285.39-.658 1.176a4.2 4.2 0 0 1-1.111 1.44a.152.16 45.9 0 1-.205.002q-.312-.278-.164-.711l2.076-4.371a.503.583 7.9 0 1 .347-.307a2.6 2.6 0 0 1 .649-.102m-61.248.469q.027.072.205.197q-.179-.124-.205-.197m17.014.4q.356-.055.135.512a8.5 8.5 0 0 1-1.565 2.6q-.131.15-.34.787q-.154.3-.662.953q-.834 1.07-.742-.418q.984-1.757 1.244-2.49q.447-1.266 1.627-1.836a1.2 1.2 0 0 1 .303-.107zm65.72 1.026a.144.144 0 0 0 .062.16q-.084-.06-.062-.16m-72.208.906q.65.297.904.457c.232.149.448.262.668.385c-.22-.123-.436-.235-.668-.383a9 9 0 0 0-.904-.459m-6.653.1q1.899 1.225 3.91 2.38a95 95 0 0 0 4.135 2.24a95 95 0 0 1-4.135-2.24a88 88 0 0 1-3.91-2.38m78.6.125a.4.38 5.3 0 0 .001 0zm-2.208.851h.002q-.536.516-1.08 1.164q-.117.145-.193.313h-.002a1.5 1.5 0 0 1 .195-.313q.542-.648 1.078-1.164m-64.161 1.041q.224.082.464.112q.665.079.91.177q-.245-.099-.91-.175a2 2 0 0 1-.464-.114m40.55.067q-.82.59-1.605.67q.783-.082 1.605-.67m-17.39.338q.537.039.199.6q-.17.288-.205.85v.003a1.3 1.3 0 0 1-.485.744a.5.5 0 0 0-.168.193a9.9 9.9 0 0 1-1.949 2.756q-.015.016-.234.3q-.196.252-.488.11a.396.405 30.3 0 1-.147-.582l2.066-3.054q.314-.348.454-.803q.201-.637.712-1.037a.335.38 30.4 0 1 .245-.08m-11.723.453a.498.348 49.4 0 1 .25.064q.203.112.42.166a1.7 1.7 0 0 1-.422-.164a.498.348 49.4 0 0-.248-.064zm1.121.28q1.407.263 2.826.45a8.9 8.9 0 0 1 2.64.182q.374.08.843.049v.002a3 3 0 0 1-.842-.05a8.9 8.9 0 0 0-2.64-.18a52 52 0 0 1-2.827-.454zm-7.455.173q.024.004.047.01v.002zm42.736.41q.499.004.06.969a.255.375 83.6 0 1-.187.16q-.356.147-.228.549q.174.551-.268.877a.177.184 62.7 0 0-.066.199q.273.867-.463 1.517a2.8 2.8 0 0 1-1.059.547a6.6 6.6 0 0 1 .592-2.408q.134-1.005.648-1.853q.198-.322.534-.453q.27-.105.437-.104m-15.345.211q.265-.03.548.07q-.008.168-.318.674a114 114 0 0 1-2.107 3.315q-.24.358-.381-.045q-.207-.575.146-1.13q.626-1.45 1.6-2.69h.002q.245-.164.51-.194m.89.187q-.11.142-.195.114q.084.03.195-.114m-22.504.21q.306-.105.356.263q.102.739-.4 1.328q-.477.556-.606.84q-.36.798-.695 1.606q-.161.385-.375.474q-.285.12-.676-.04a.26.26 0 0 1-.143-.339a16 16 0 0 1 2.262-3.908a.66.66 0 0 1 .277-.225zm47.555.714h.002a4 4 0 0 0-.442.573a.264.259 13.3 0 0-.002 0a4 4 0 0 1 .442-.573m-3.356.004h.002zm-.35 2.024a.307.303 14.7 0 0 .003 0h-.002zm-56.015.433a.5.5 0 0 0 .131.114v.002a.5.5 0 0 1-.13-.116zm22.512 7.326a6.3 6.3 0 0 0-1.078.116l-.002-.002q.54-.104 1.08-.114", "c": "#2D2D2D", "vb": "0 0 128 128" },
    { "id": "bootstrap", "name": "Bootstrap", "tier": 2, "d": "M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z", "c": "#7952B3" },
    { "id": "styledcomponents", "name": "styled-components", "tier": 2, "d": "M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217V15.867l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z", "c": "#DB7093" },
    { "id": "ffmpeg", "name": "ffmpeg", "tier": 2, "d": "M21.72 17.91V6.5l-.53-.49L9.05 18.52l-1.29-.06L24 1.53l-.33-.95-11.93 1-5.75 6.6v-.23l4.7-5.39-1.38-.77-9.11.77v2.85l1.91.46v.01l.19-.01-.56.66v10.6c.609-.126 1.22-.241 1.83-.36L14.12 5.22l.83-.04L0 21.44l9.67.82 1.35-.77 6.82-6.74v2.15l-5.72 5.57 11.26.95.35-.94v-3.16l-3.29-.18c.434-.403.858-.816 1.28-1.23z", "c": "#007808" },
    { "id": "gsap", "name": "GSAP", "tier": 2, "d": "M9.83,7.59C10.647,7.595 11.267,7.828 11.672,8.282C12.055,8.713 12.239,9.336 12.219,10.132L12.205,10.193C12.197,10.211 12.185,10.229 12.17,10.243C12.14,10.272 12.099,10.288 12.057,10.288L10.398,10.288C10.29,10.288 10.199,10.2 10.199,10.093C10.199,9.669 10.071,9.435 9.809,9.383L9.689,9.372C9.347,9.372 9.125,9.583 9.119,9.951C9.112,10.361 9.344,10.734 10.004,11.374C10.872,12.19 11.221,12.913 11.204,13.867C11.177,15.411 10.127,16.41 8.531,16.41C7.716,16.41 7.093,16.191 6.678,15.761C6.258,15.324 6.066,14.683 6.106,13.855C6.108,13.813 6.125,13.772 6.155,13.743C6.185,13.714 6.226,13.698 6.267,13.698L7.983,13.698C8.007,13.699 8.03,13.705 8.052,13.715C8.073,13.726 8.092,13.741 8.107,13.76C8.12,13.775 8.129,13.793 8.135,13.813C8.14,13.832 8.141,13.853 8.137,13.873C8.118,14.171 8.171,14.394 8.288,14.518C8.363,14.598 8.469,14.639 8.599,14.639C8.916,14.639 9.102,14.414 9.109,14.024C9.115,13.687 9.007,13.39 8.427,12.792C7.676,12.058 7.003,11.3 7.024,10.108C7.037,9.416 7.311,8.784 7.798,8.327C8.312,7.845 9.014,7.59 9.83,7.59ZM4.047,7.618C4.794,7.612 5.381,7.842 5.789,8.303C6.221,8.79 6.44,9.524 6.441,10.485C6.44,10.527 6.422,10.567 6.392,10.597C6.362,10.626 6.322,10.643 6.28,10.643L4.479,10.643C4.448,10.642 4.417,10.629 4.395,10.607C4.373,10.584 4.361,10.553 4.36,10.522C4.346,9.899 4.172,9.576 3.828,9.538L3.757,9.534C3.067,9.535 2.66,10.472 2.444,10.992C2.142,11.719 1.988,12.507 2.018,13.293C2.033,13.659 2.092,14.173 2.438,14.386C2.746,14.575 3.185,14.45 3.451,14.24C3.716,14.031 3.93,13.669 4.02,13.339C4.033,13.293 4.033,13.258 4.021,13.241C4.015,13.233 4.003,13.229 3.989,13.226L3.485,13.222C3.461,13.222 3.436,13.216 3.414,13.206C3.392,13.196 3.372,13.181 3.356,13.162C3.344,13.148 3.335,13.13 3.331,13.112C3.327,13.093 3.327,13.074 3.331,13.056L3.647,11.682C3.663,11.611 3.726,11.558 3.804,11.548L3.804,11.545L6.839,11.545C6.846,11.545 6.854,11.545 6.86,11.546C6.939,11.556 6.995,11.63 6.994,11.71L6.994,11.714L6.678,13.085C6.661,13.163 6.583,13.22 6.494,13.22L6.113,13.22C6.1,13.22 6.086,13.225 6.075,13.233C6.064,13.241 6.056,13.253 6.052,13.266C5.7,14.46 5.223,15.282 4.594,15.775C4.058,16.195 3.399,16.391 2.517,16.391C1.725,16.391 1.191,16.136 0.738,15.633C0.14,14.967 -0.107,13.879 0.043,12.566C0.313,10.103 1.589,7.618 4.047,7.618ZM21.016,7.75C23.026,7.75 24.03,8.662 23.999,10.461C23.962,12.569 22.678,14.119 20.745,14.477C20.47,14.527 20.191,14.547 19.912,14.545L18.978,14.541C18.963,14.541 18.948,14.547 18.937,14.558C18.926,14.568 18.92,14.583 18.92,14.598C18.92,14.608 18.922,14.618 18.928,14.627C18.933,14.636 18.941,14.643 18.95,14.648L19.744,15.062C19.809,15.096 19.835,15.153 19.82,15.226C19.815,15.249 19.618,16.139 19.613,16.159C19.596,16.237 19.533,16.282 19.442,16.282L17.739,16.282C17.715,16.282 17.69,16.277 17.668,16.267C17.646,16.257 17.626,16.241 17.61,16.223C17.598,16.208 17.589,16.191 17.585,16.173C17.58,16.155 17.581,16.135 17.585,16.116L19.481,7.875C19.5,7.789 19.581,7.751 19.653,7.751L21.016,7.75ZM17.273,7.762C17.292,7.77 17.31,7.781 17.324,7.795C17.338,7.81 17.351,7.828 17.358,7.847C17.366,7.866 17.369,7.886 17.369,7.906L17.358,16.119C17.361,16.138 17.36,16.158 17.355,16.177C17.35,16.196 17.34,16.213 17.328,16.228C17.313,16.245 17.295,16.259 17.274,16.268C17.254,16.277 17.232,16.282 17.21,16.281L15.397,16.281C15.377,16.282 15.356,16.277 15.337,16.27C15.318,16.262 15.3,16.25 15.286,16.236C15.272,16.221 15.26,16.204 15.253,16.185C15.245,16.166 15.241,16.146 15.241,16.125L15.28,15.328C15.282,15.241 15.28,15.217 15.229,15.211L15.161,15.209L13.447,15.209C13.323,15.209 13.314,15.22 13.27,15.334L12.914,16.191C12.882,16.252 12.818,16.281 12.722,16.281L10.927,16.281C10.818,16.281 10.74,16.173 10.781,16.072L14.499,7.873C14.524,7.824 14.562,7.75 14.648,7.75L17.214,7.75C17.234,7.75 17.254,7.754 17.273,7.762ZM15.5,9.985C15.492,9.953 15.466,9.956 15.445,9.998C15.43,10.028 15.416,10.06 15.405,10.091L14.121,13.274C14.114,13.294 14.109,13.31 14.105,13.322C14.104,13.328 14.103,13.335 14.104,13.341C14.105,13.347 14.108,13.353 14.111,13.358C14.115,13.363 14.12,13.367 14.126,13.37C14.131,13.373 14.137,13.376 14.143,13.376L15.215,13.39C15.334,13.38 15.34,13.374 15.352,13.253C15.354,13.21 15.506,10.022 15.5,9.985ZM20.112,9.582C20.097,9.582 20.083,9.588 20.072,9.599C20.061,9.609 20.055,9.624 20.054,9.639C20.054,9.649 20.057,9.659 20.062,9.668C20.068,9.677 20.075,9.685 20.084,9.69C20.097,9.697 20.869,10.104 20.926,10.135C20.968,10.158 20.969,10.198 20.955,10.267C20.948,10.298 20.415,12.642 20.416,12.644C20.419,12.647 20.435,12.655 20.515,12.655L20.551,12.655C21.446,12.619 21.934,11.561 21.952,10.534C21.961,9.979 21.772,9.638 21.429,9.588L21.358,9.582L20.112,9.582Z", "c": "#0AE448" },
    { "id": "threedotjs", "name": "Three.js", "tier": 2, "d": "M.38 0a.268.268 0 0 0-.256.332l2.894 11.716a.268.268 0 0 0 .01.04l2.89 11.708a.268.268 0 0 0 .447.128L23.802 7.15a.268.268 0 0 0-.112-.45l-5.784-1.667a.268.268 0 0 0-.123-.035L6.38 1.715a.268.268 0 0 0-.144-.04L.456.01A.268.268 0 0 0 .38 0zm.374.654L5.71 2.08 1.99 5.664zM6.61 2.34l4.864 1.4-3.65 3.515zm-.522.12l1.217 4.926-4.877-1.4zm6.28 1.538l4.878 1.404-3.662 3.53zm-.52.13l1.208 4.9-4.853-1.392zm6.3 1.534l4.947 1.424-3.715 3.574zm-.524.12l1.215 4.926-4.876-1.398zm-15.432.696l4.964 1.424-3.726 3.586zM8.047 8.15l4.877 1.4-3.66 3.527zm-.518.137l1.236 5.017-4.963-1.432zm6.274 1.535l4.965 1.425-3.73 3.586zm-.52.127l1.235 5.012-4.958-1.43zm-9.63 2.438l4.873 1.406-3.656 3.523zm5.854 1.687l4.863 1.403-3.648 3.51zm-.54.04l1.214 4.927-4.875-1.4zm-3.896 4.02l5.037 1.442-3.782 3.638z", "c": "#000000" },
    { "id": "webgl", "name": "WebGL", "tier": 2, "d": "M3.489 10.164c-.565.548-.885 1.172-.885 1.835 0 2.167 3.415 3.921 7.631 3.921 2.339 0 4.437-.484 5.837-1.335-1.533 1.426-4.265 2.43-7.385 2.43C3.89 17.015 0 14.769 0 11.999s3.89-5.014 8.689-5.014c3.131.002 5.872 1.009 7.398 2.444-1.399-.856-3.504-1.351-5.852-1.351-2.506 0-4.73.621-6.121 1.579l.785 3.395.971-3.481h.737l.971 3.481.805-3.481h.805L7.953 14.11h-.717l-.991-3.566L5.24 14.11h-.714zm19.839 3.48h-.162v.424h-.142v-.424h-.164v-.122h.468zm.064-.122h.209l.095.364.096-.364H24v.546h-.133v-.415h-.002l-.113.415h-.109l-.115-.415h-.003v.415h-.133zm-5.699.515c-.2.084-.399.126-.601.126-.319 0-.608-.055-.863-.166q-.3825-.1665-.645-.459c-.175-.195-.311-.424-.404-.688-.093-.263-.14-.547-.14-.851 0-.313.047-.601.14-.869.093-.269.226-.502.402-.699.175-.2.39-.355.645-.468s.541-.171.863-.171c.215 0 .421.034.621.098.199.064.381.16.543.284s.295.279.399.463.169.395.193.632h-.874c-.055-.233-.159-.408-.315-.525-.155-.118-.343-.176-.567-.176-.207 0-.382.04-.526.12s-.262.187-.35.322a1.41 1.41 0 0 0-.196.459c-.039.171-.062.348-.062.532 0 .175.02.346.062.512.04.167.107.315.196.448.088.133.206.24.35.32s.319.119.526.119c.303 0 .539-.077.705-.23s.262-.375.29-.668h-.922v-.689h1.75v2.255h-.584l-.093-.472c-.162.21-.344.357-.543.441m2.708-4.14v3.395h2.033v.774h-2.949V9.897zm-9.204 1.585c.109.151.191.337.251.557.053.21.08.452.08.716v.047H9.372c.011.41.164.876.807.876.45 0 .703-.344.719-.537l.002-.042h.592l-.007.051c-.008.075-.051.222-.135.377-.049.086-.104.166-.166.239a1.3 1.3 0 0 1-.248.218c-.071.046-.158.1-.287.139-.148.047-.326.069-.543.069-.415 0-.763-.151-1.007-.434a1.43 1.43 0 0 1-.266-.482c-.06-.182-.091-.386-.091-.601 0-.485.12-.896.348-1.186.125-.158.278-.28.457-.362.191-.086.41-.131.654-.131.218 0 .413.043.581.127.165.082.304.202.415.359m-1.064.047c-.402 0-.741.357-.765.785h1.543c-.046-.528-.302-.785-.778-.785m4.373.388c.058.182.086.381.084.588 0 .19-.022.385-.064.563-.049.206-.122.39-.22.545-.11.178-.252.318-.419.415-.186.109-.408.164-.654.164-.228 0-.426-.057-.585-.173a.89.89 0 0 1-.198-.193v.282h-.561V9.983h.59v1.393c.093-.111.202-.2.324-.262.146-.078.313-.118.497-.12.199 0 .383.04.547.118.158.075.295.184.408.324.109.135.193.297.251.481m-.53.67c0-.2-.013-.459-.111-.672-.12-.26-.335-.384-.654-.384-.3 0-.506.135-.628.417-.084.195-.126.452-.126.785 0 .696.412.942.765.942.244 0 .435-.102.565-.303.125-.191.189-.462.189-.785", "c": "#990000" },
    { "id": "electron", "name": "Electron", "tier": 2, "d": "M12.0111 0c-.85 0-1.5392.6891-1.5392 1.5392 0 .8501.6891 1.5393 1.5392 1.5393.595 0 1.11-.338 1.3662-.832 2.2208 1.2675 3.847 5.4728 3.847 10.3623 0 2.0715-.2891 4.056-.825 5.7685a.3215.3215 0 0 0 .2107.403.322.322 0 0 0 .4033-.2111c.5558-1.7763.8542-3.8251.8542-5.9604 0-5.1927-1.7717-9.686-4.3206-11.0027.001-.0223.0035-.0443.0035-.0669 0-.85-.6891-1.5392-1.5393-1.5392zm0 .6432a.896.896 0 1 1 0 1.792.896.896 0 1 1 0-1.792zm-5.486 4.3052c-2.067.0074-3.6473.6646-4.3885 1.9485-.7375 1.2774-.5267 2.971.5113 4.7813a.3217.3217 0 0 0 .558-.32C2.271 9.7274 2.089 8.266 2.6938 7.2185c.821-1.422 3.033-1.9552 5.9321-1.4271a.3216.3216 0 0 0 .1153-.6329c-.784-.1428-1.5271-.2125-2.216-.21zm11.0522.0176a.3216.3216 0 0 0-.0084.6432c1.8337.0239 3.1556.5956 3.7502 1.6256.8192 1.419.1798 3.5947-1.7182 5.837a.322.322 0 0 0 .0377.4535.3215.3215 0 0 0 .4532-.0377c2.0535-2.426 2.7708-4.8661 1.7845-6.5744-.7257-1.257-2.26-1.9207-4.299-1.9472zm-2.6984.2924a.3225.3225 0 0 0-.0647.0072c-1.8568.3979-3.8333 1.1755-5.7314 2.2714-4.5699 2.6384-7.5924 6.4948-7.3601 9.3717-.4726.2628-.7928.7664-.7928 1.3455 0 .85.6892 1.5392 1.5393 1.5392.85 0 1.5392-.6891 1.5392-1.5392 0-.8501-.6891-1.5393-1.5392-1.5393-.038 0-.0754.003-.1128.0057-.1002-2.5597 2.7434-6.1412 7.048-8.6265 1.8413-1.063 3.7551-1.8163 5.5445-2.1997a.3217.3217 0 0 0-.07-.636zm-2.8787 6.2364a1.1192 1.1192 0 0 0-.2243.0255c-.6012.1301-.983.7225-.8533 1.3238.1302.6012.7226.9832 1.3238.8533.6012-.1302.9832-.7226.8533-1.3238-.1139-.526-.5816-.8844-1.0995-.8788zM4.532 13.341a.321.321 0 0 0-.2318.0835.3214.3214 0 0 0-.0214.4542c1.2682 1.3936 2.9157 2.701 4.7946 3.7857 4.4146 2.5489 9.1056 3.2849 11.5608 1.8392a1.53 1.53 0 0 0 .8966.2899c.8501 0 1.5392-.6891 1.5392-1.5392 0-.8501-.689-1.5393-1.5392-1.5393-.85 0-1.5392.6892-1.5392 1.5393 0 .276.0737.5344.201.7584-2.2448 1.214-6.631.5002-10.7976-1.9054-1.8228-1.0524-3.418-2.3181-4.6404-3.6614a.3206.3206 0 0 0-.2226-.1049zm-2.0628 4.0172a.896.896 0 1 1 0 1.792.896.896 0 1 1 0-1.792zm19.0616 0a.896.896 0 1 1 0 1.792.891.891 0 0 1-.5864-.2194c-.0025-.004-.0039-.0083-.0066-.0123a.3195.3195 0 0 0-.0957-.0914.896.896 0 0 1 .6887-1.4689zm-14.0045 1.368a.3215.3215 0 0 0-.3207.4296C8.2793 22.154 10.036 24 12.0111 24c1.4406 0 2.7735-.9822 3.8128-2.711a.3215.3215 0 0 0-.11-.4413.3219.3219 0 0 0-.4415.11c-.934 1.5537-2.0812 2.399-3.2613 2.399-1.6407 0-3.2075-1.6465-4.2-4.4179a.3216.3216 0 0 0-.2848-.2126z", "c": "#47848F" },
    { "id": "expo", "name": "Expo", "tier": 2, "d": "M0 20.084c.043.53.23 1.063.718 1.778.58.849 1.576 1.315 2.303.567.49-.505 5.794-9.776 8.35-13.29a.761.761 0 011.248 0c2.556 3.514 7.86 12.785 8.35 13.29.727.748 1.723.282 2.303-.567.57-.835.728-1.42.728-2.046 0-.426-8.26-15.798-9.092-17.078-.8-1.23-1.044-1.498-2.397-1.542h-1.032c-1.353.044-1.597.311-2.398 1.542C8.267 3.991.33 18.758 0 19.77Z", "c": "#1C2024" },
    { "id": "flutter", "name": "Flutter", "tier": 2, "d": "M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z", "c": "#02569B" },
    { "id": "betterauth", "name": "Better Auth", "tier": 2, "d": "M0 3.39v17.22h5.783V15.06h6.434V8.939H5.783V3.39ZM12.217 8.94h5.638v6.122h-5.638v5.548H24V3.391H12.217Z", "c": "#FFFFFF" },
    { "id": "fastapi", "name": "FastAPI", "tier": 2, "d": "M12 .0387C5.3729.0384.0003 5.3931 0 11.9988c-.001 6.6066 5.372 11.9628 12 11.9625 6.628.0003 12.001-5.3559 12-11.9625-.0003-6.6057-5.3729-11.9604-12-11.96m-.829 5.4153h7.55l-7.5805 5.3284h5.1828L5.279 18.5436q2.9466-6.5444 5.892-13.0896", "c": "#009688" },
    { "id": "fastify", "name": "Fastify", "tier": 2, "d": "M23.245 6.49L24 4.533l-.031-.121-7.473 1.967c.797-1.153.523-2.078.523-2.078s-2.387 1.524-4.193 1.485c-1.804-.04-2.387-.52-5.155.362-2.768.882-3.551 3.59-4.351 4.173-.804.583-3.32 2.477-3.32 2.477l.006.034 2.27-.724s-.622.585-1.945 2.37l-.062-.057.002.011s1.064 1.626 2.107 1.324a2.14 2.14 0 0 0 .353-.147c.419.234.967.463 1.572.525 0 0-.41-.475-.752-1.017l.238-.154.865.318-.096-.812c.003-.003.006-.003.008-.006l.849.311-.105-.738a5.65 5.65 0 0 1 .322-.158l.885-3.345 3.662-2.497-.291.733c-.741 1.826-2.135 2.256-2.135 2.256l-.582.22c-.433.512-.614.637-.764 2.353.348-.088.682-.107.984-.028 1.564.421 2.107 2.307 1.685 2.827-.104.13-.356.354-.673.617H7.77l-.008.514-.065.051h-.645l-.009.504-.17.127c-.607.011-1.373-.518-1.373-.518 0 .481.401 1.225.401 1.225l.07-.034-.061.045s1.625 1.083 2.646.681c.91-.356 3.263-2.213 5.296-3.093l6.15-1.62.811-2.1-4.688 1.235v-1.889l5.5-1.448.811-2.1-6.31 1.662V8.367zm-11.163 4l1.459-.384.02.074-.455 1.179-1.513.398zm.503 2.526l-1.512.398.489-1.266 1.459-.385.02.074zm1.971-.424l-1.513.398.49-1.266 1.459-.385.02.073Z", "c": "#000000" },
    { "id": "graphql", "name": "GraphQL", "tier": 2, "d": "M12.002 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm0 9.862a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm-8.54 4.931a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.276zm-8.542-4.93a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.277zm0-9.863a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.542-3.378L2.953 6.777v10.448l9.049 5.224 9.047-5.224V6.777zm0 1.601 7.66 13.27H4.34zm-1.387.371L3.97 15.037V7.363zm2.774 0 6.646 3.838v7.674zM5.355 17.44h13.293l-6.646 3.836z", "c": "#E10098" },
    { "id": "hono", "name": "Hono", "tier": 2, "d": "M12.445.002a45.529 45.529 0 0 0-5.252 8.146 8.595 8.595 0 0 1-.555-.53 27.796 27.796 0 0 0-1.205-1.542 8.762 8.762 0 0 0-1.251 2.12 20.743 20.743 0 0 0-1.448 5.88 8.867 8.867 0 0 0 .338 3.468c1.312 3.48 3.794 5.593 7.445 6.337 3.055.438 5.755-.333 8.097-2.312 2.677-2.59 3.359-5.634 2.047-9.132a33.287 33.287 0 0 0-2.988-5.59A91.34 91.34 0 0 0 12.615.053a.216.216 0 0 0-.17-.051Zm-.336 3.906a50.93 50.93 0 0 1 4.794 6.552c.448.767.817 1.57 1.108 2.41.606 2.386-.044 4.354-1.951 5.904-1.845 1.298-3.87 1.683-6.072 1.156-2.376-.737-3.75-2.335-4.121-4.794a5.107 5.107 0 0 1 .242-2.266c.358-.908.79-1.774 1.3-2.601l1.446-2.121a397.33 397.33 0 0 0 3.254-4.24Z", "c": "#E36002" },
    { "id": "resend", "name": "Resend", "tier": 2, "d": "M14.679 0c4.648 0 7.413 2.765 7.413 6.434s-2.765 6.434-7.413 6.434H12.33L24 24h-8.245l-8.88-8.44c-.636-.588-.93-1.273-.93-1.86 0-.831.587-1.565 1.713-1.883l4.574-1.224c1.737-.465 2.936-1.81 2.936-3.572 0-2.153-1.761-3.4-3.939-3.4H0V0z", "c": "#000000" },
    { "id": "firebase", "name": "Firebase", "tier": 2, "d": "M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558-1.135-1.12-1.967-2.352-2.475-3.665-.543-1.404-.87-2.74-.974-3.975.48.157.922.366 1.315.622 1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028-.771.21-1.565.302-2.369.273a8 8 0 0 1-.373-.022c.458-.394.869-.823 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398-.647-.421-1.385-.741-2.194-.95.011-.134.026-.268.043-.4.014-.113.03-.216.046-.313.133-.689.332-1.37.589-2.025.099-.25.206-.499.321-.74l.004-.008c.177-.358.376-.719.61-1.105l.092-.152-.003-.001c.544-.851 1.197-1.627 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237 1.291 1.549 2.966 3.583 3.612 4.48 1.277 1.771 1.893 3.579 1.83 5.375-.049 1.395-.461 2.755-1.195 3.933-.694 1.116-1.661 2.05-2.8 2.708-.636-.318-1.559-.839-2.539-1.599.79-1.575.952-3.28.479-5.072zm-2.575 5.397c-.725.939-1.587 1.55-2.09 1.856-.081-.029-.163-.06-.243-.093l-.065-.026c-1.49-.616-2.747-1.656-3.635-3.01-.907-1.384-1.356-2.993-1.298-4.653.041-1.19.338-2.327.882-3.379.316-.07.638-.114.96-.131l.084-.002c.162-.003.324-.003.478 0 .227.011.454.035.677.07.073 1.513.445 3.145 1.105 4.852.637 1.644 1.694 3.162 3.144 4.515z", "c": "#DD2C00" },
    { "id": "mongodb", "name": "MongoDB", "tier": 2, "d": "M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z", "c": "#47A248" },
    { "id": "mysql", "name": "MySQL", "tier": 2, "d": "M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z", "c": "#4479A1" },
    { "id": "pouchdb", "name": "PouchDB", "tier": 2, "d": "M18.752 0L0 91.459l53.782 50.743l-34.943 62.289L89.94 329.677h77.785l71.406-125.186l-35.245-62.29l51.96-50.742L238.738 0L165.6 97.41H92.372z m18.839 204.49l34.942-62.288l75.044 62.29z m53.782 142.203l75.044 62.29L92.371 97.41z m239.13 204.49l-35.246-62.288l-75.056 62.29z M89.94 329.677h77.784l-38.897-125.186z m203.884 142.203l-75.056 62.29L165.599 97.41z m238.74 0l17.102 91.46l-51.958 50.743l-38.286-44.793z m128.825 204.49l38.9 125.187l71.405-125.186z M128.825 204.49L89.928 329.678L18.84 204.491z M18.752 0L0 91.46l53.782 50.744L92.37 97.41z m128.825 204.49l36.773-107.079H92.371z", "c": "#6CCB94", "vb": "0 0 256 330" },
    { "id": "redis", "name": "Redis", "tier": 2, "d": "M22.71 13.145c-1.66 2.092-3.452 4.483-7.038 4.483-3.203 0-4.397-2.825-4.48-5.12.701 1.484 2.073 2.685 4.214 2.63 4.117-.133 6.94-3.852 6.94-7.239 0-4.05-3.022-6.972-8.268-6.972-3.752 0-8.4 1.428-11.455 3.685C2.59 6.937 3.885 9.958 4.35 9.626c2.648-1.904 4.748-3.13 6.784-3.744C8.12 9.244.886 17.05 0 18.425c.1 1.261 1.66 4.648 2.424 4.648.232 0 .431-.133.664-.365a100.49 100.49 0 0 0 5.54-6.765c.222 3.104 1.748 6.898 6.014 6.898 3.819 0 7.604-2.756 9.33-8.965.2-.764-.73-1.361-1.261-.73zm-4.349-5.013c0 1.959-1.926 2.922-3.685 2.922-.941 0-1.664-.247-2.235-.568 1.051-1.592 2.092-3.225 3.21-4.973 1.972.334 2.71 1.43 2.71 2.619z", "c": "#FF4438" },
    { "id": "rxdb", "name": "RxDB", "tier": 2, "d": "M11.096 3.452h1.15v-1.15h1.151v1.15h6.411v4.932H4.192V1.15h1.15V2.3h1.151V0h1.15v1.15h1.152v2.302h1.15V1.151h1.151v2.301zM4.192 14.466h15.616V9.534H4.192v4.932zm15.616 1.15H4.192v4.932h6.41v1.15h1.151v-1.15h1.151v2.301h1.15v-2.301h1.152v2.301h1.15V24h1.151v-2.301h1.15v1.15h1.151v-7.233z", "c": "#8D1F89" },
    { "id": "sanity", "name": "Sanity", "tier": 2, "d": "m23.327 15.205-.893-1.555-4.321 2.632 4.799-6.11.726-.426-.179-.27.33-.421-1.515-1.261-.693.883-13.992 8.186 5.173-6.221 9.636-5.282-.915-1.769-5.248 2.876 2.584-3.106-1.481-1.305-5.816 6.994-5.777 3.168 4.423-5.847 2.771-1.442-.88-1.789-8.075 4.203L6.186 4.43 4.648 3.198 0 9.349l.072.058.868 1.768 5.153-2.683-4.696 6.207.77.617.458.885 5.425-2.974-5.974 7.185 1.481 1.304.297-.358 14.411-8.459-4.785 6.094.078.065-.007.005.992 1.726 6.364-3.877-2.451 3.954 1.642 1.077L24 15.648z", "c": "#0D0E12" },
    { "id": "supabase", "name": "Supabase", "tier": 2, "d": "M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z", "c": "#3FCF8E" },
    { "id": "turso", "name": "Turso", "tier": 2, "d": "m23.31.803-.563-.42-1.11 1.189-.891-1.286-.512.235.704 1.798-.326.35L18.082 0l-.574.284 2.25 4.836-2.108.741h-.05l-1.143-1.359-1.144 1.36H8.687l-1.144-1.36-1.146 1.363H6.36l-2.12-.745L6.491.284 5.919 0l-2.53 2.668-.327-.349.705-1.798-.512-.236-.89 1.287L1.253.382.69.804 2.42 3.69l-.89.939.311 2.375 2.061.787L3.9 8.817H1.947v.444l.755 1.078 1.197.433v6.971l3.057 4.55L7.657 24l1.101-1.606L9.9 24l.999-1.606L12 24l1.102-1.606L14.1 24l1.141-1.606L16.343 24l.701-1.706 3.058-4.55v-6.972l1.196-.433.756-1.078v-.444h-1.952l.003-1.03 2.054-.784.311-2.375-.89-.939zm-8.93 18.718H8.033l.793-1.615.794 1.615.793-1.083.793 1.083.794-1.083.793 1.083.794-1.083.793 1.083.793-1.615.794 1.615zm3.886-7.39-3.3 1.084-.143 3.061-2.827.627-2.826-.627-.142-3.06-3.3-1.085v-1.635l4.266 1.21-.052 4.126h4.109l-.052-4.127 4.266-1.209z", "c": "#4FF8D2" },
    { "id": "yup", "name": "Yup", "tier": 2 },
    { "id": "biome", "name": "Biome", "tier": 2, "d": "m12 1.608-5.346 9.259a12.069 12.069 0 0 1 6.326-.219l1.807.426-1.7 7.208-1.809-.427c-2.224-.524-4.361.644-5.264 2.507l-1.672-.809c1.276-2.636 4.284-4.232 7.364-3.505l.847-3.592A10.211 10.211 0 0 0 0 22.392h24L12 1.608Z", "c": "#60A5FA" },
    { "id": "eslint", "name": "ESLint", "tier": 2, "d": "M7.257 9.132L11.816 6.5a.369.369 0 0 1 .368 0l4.559 2.632a.369.369 0 0 1 .184.32v5.263a.37.37 0 0 1-.184.319l-4.559 2.632a.369.369 0 0 1-.368 0l-4.559-2.632a.369.369 0 0 1-.184-.32V9.452a.37.37 0 0 1 .184-.32M23.852 11.53l-5.446-9.475c-.198-.343-.564-.596-.96-.596H6.555c-.396 0-.762.253-.96.596L.149 11.509a1.127 1.127 0 0 0 0 1.117l5.447 9.398c.197.342.563.517.959.517h10.893c.395 0 .76-.17.959-.512l5.446-9.413a1.069 1.069 0 0 0 0-1.086m-4.51 4.556a.4.4 0 0 1-.204.338L12.2 20.426a.395.395 0 0 1-.392 0l-6.943-4.002a.4.4 0 0 1-.205-.338V8.08c0-.14.083-.269.204-.338L11.8 3.74c.12-.07.272-.07.392 0l6.943 4.003a.4.4 0 0 1 .206.338z", "c": "#4B32C3" },
    { "id": "jest", "name": "Jest", "tier": 2, "d": "M22.251 11.82a3.117 3.117 0 0 0-2.328-3.01L22.911 0H8.104L11.1 8.838a3.116 3.116 0 0 0-2.244 2.988c0 1.043.52 1.967 1.313 2.536a8.279 8.279 0 0 1-1.084 1.244 8.14 8.14 0 0 1-2.55 1.647c-.834-.563-1.195-1.556-.869-2.446a3.11 3.11 0 0 0-.91-6.08 3.117 3.117 0 0 0-3.113 3.113c0 .848.347 1.626.903 2.182-.048.097-.097.195-.146.299-.465.959-.993 2.043-1.195 3.259-.403 2.432.257 4.384 1.849 5.489A5.093 5.093 0 0 0 5.999 24c1.827 0 3.682-.917 5.475-1.807 1.279-.632 2.599-1.292 3.898-1.612.48-.118.98-.187 1.508-.264 1.07-.153 2.175-.312 3.168-.89a4.482 4.482 0 0 0 2.182-3.091c.174-.994 0-1.994-.444-2.87.298-.48.465-1.042.465-1.647zm-1.355 0c0 .965-.785 1.75-1.75 1.75a1.753 1.753 0 0 1-1.085-3.126l.007-.007c.056-.042.118-.084.18-.125 0 0 .008 0 .008-.007.028-.014.055-.035.083-.05.007 0 .014-.006.021-.006.028-.014.063-.028.097-.042.035-.014.07-.027.098-.041.007 0 .013-.007.02-.007.028-.007.056-.021.084-.028.007 0 .02-.007.028-.007.034-.007.062-.014.097-.02h.007l.104-.022c.007 0 .02 0 .028-.007.028 0 .055-.007.083-.007h.035c.035 0 .07-.007.111-.007h.09c.028 0 .05 0 .077.007h.014c.055.007.111.014.167.028a1.766 1.766 0 0 1 1.396 1.723zM10.043 1.39h10.93l-2.509 7.4c-.104.02-.208.055-.312.09l-2.64-5.385-2.648 5.35c-.104-.034-.216-.055-.327-.076l-2.494-7.38zm4.968 9.825a3.083 3.083 0 0 0-.938-1.668l1.438-2.904 1.452 2.967c-.43.43-.743.98-.868 1.605H15.01zm-3.481-1.098c.034-.007.062-.014.097-.02h.02c.029-.008.056-.008.084-.015h.028c.028 0 .049-.007.076-.007h.271c.028 0 .049.007.07.007.014 0 .02 0 .035.007.027.007.048.007.076.014.007 0 .014 0 .028.007l.097.02h.007c.028.008.056.015.083.029.007 0 .014.007.028.007.021.007.049.014.07.027.007 0 .014.007.02.007.028.014.056.021.084.035h.007a.374.374 0 0 1 .09.049h.007c.028.014.056.034.084.048.007 0 .007.007.013.007.028.014.05.035.077.049l.007.007c.083.062.16.132.236.201l.007.007a1.747 1.747 0 0 1 .48 1.209 1.752 1.752 0 0 1-3.502 0 1.742 1.742 0 0 1 1.32-1.695zm-6.838-.049c.966 0 1.751.786 1.751 1.751s-.785 1.751-1.75 1.751-1.752-.785-1.752-1.75.786-1.752 1.751-1.752zm16.163 6.025a3.07 3.07 0 0 1-1.508 2.133c-.758.438-1.689.577-2.669.716a17.29 17.29 0 0 0-1.64.291c-1.445.355-2.834 1.05-4.182 1.717-1.724.854-3.35 1.66-4.857 1.66a3.645 3.645 0 0 1-2.154-.688c-1.529-1.056-1.453-3.036-1.272-4.12.167-1.015.632-1.966 1.077-2.877.028-.055.049-.104.077-.16.152.056.312.098.479.126-.264 1.473.486 2.994 1.946 3.745l.264.139.284-.104c1.216-.431 2.342-1.133 3.336-2.071a9.334 9.334 0 0 0 1.445-1.716c.16.027.32.034.48.034a3.117 3.117 0 0 0 3.008-2.327h1.167a3.109 3.109 0 0 0 3.01 2.327c.576 0 1.11-.16 1.57-.43.18.52.236 1.063.139 1.605z", "c": "#C21325" },
    { "id": "prettier", "name": "Prettier", "tier": 2, "d": "M8.571 23.429A.571.571 0 0 1 8 24H2.286a.571.571 0 0 1 0-1.143H8c.316 0 .571.256.571.572zM8 20.57H6.857a.571.571 0 0 0 0 1.143H8a.571.571 0 0 0 0-1.143zm-5.714 1.143H4.57a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zM8 18.286H2.286a.571.571 0 0 0 0 1.143H8a.571.571 0 0 0 0-1.143zM16 16H5.714a.571.571 0 0 0 0 1.143H16A.571.571 0 0 0 16 16zM2.286 17.143h1.143a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm17.143-3.429H16a.571.571 0 0 0 0 1.143h3.429a.571.571 0 0 0 0-1.143zM9.143 14.857h4.571a.571.571 0 0 0 0-1.143H9.143a.571.571 0 0 0 0 1.143zm-6.857 0h4.571a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zM20.57 11.43H11.43a.571.571 0 0 0 0 1.142h9.142a.571.571 0 0 0 0-1.142zM9.714 12a.571.571 0 0 0-.571-.571H5.714a.571.571 0 0 0 0 1.142h3.429A.571.571 0 0 0 9.714 12zm-7.428.571h1.143a.571.571 0 0 0 0-1.142H2.286a.571.571 0 0 0 0 1.142zm19.428-3.428H16a.571.571 0 0 0 0 1.143h5.714a.571.571 0 0 0 0-1.143zM2.286 10.286H8a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm13.143-2.857c0 .315.255.571.571.571h5.714a.571.571 0 0 0 0-1.143H16a.571.571 0 0 0-.571.572zm-8.572-.572a.571.571 0 0 0 0 1.143H8a.571.571 0 0 0 0-1.143H6.857zM2.286 8H4.57a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm16.571-2.857c0 .315.256.571.572.571h1.142a.571.571 0 0 0 0-1.143H19.43a.571.571 0 0 0-.572.572zm-1.143 0a.571.571 0 0 0-.571-.572H12.57a.571.571 0 0 0 0 1.143h4.572a.571.571 0 0 0 .571-.571zm-15.428.571h8a.571.571 0 0 0 0-1.143h-8a.571.571 0 0 0 0 1.143zm5.143-2.857c0 .316.255.572.571.572h11.429a.571.571 0 0 0 0-1.143H8a.571.571 0 0 0-.571.571zm-5.143.572h3.428a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm0-2.286H16A.571.571 0 0 0 16 0H2.286a.571.571 0 0 0 0 1.143z", "c": "#F7B93E" },
    { "id": "sentry", "name": "Sentry", "tier": 2, "d": "M13.91 2.505c-.873-1.448-2.972-1.448-3.844 0L6.904 7.92a15.478 15.478 0 0 1 8.53 12.811h-2.221A13.301 13.301 0 0 0 5.784 9.814l-2.926 5.06a7.65 7.65 0 0 1 4.435 5.848H2.194a.365.365 0 0 1-.298-.534l1.413-2.402a5.16 5.16 0 0 0-1.614-.913L.296 19.275a2.182 2.182 0 0 0 .812 2.999 2.24 2.24 0 0 0 1.086.288h6.983a9.322 9.322 0 0 0-3.845-8.318l1.11-1.922a11.47 11.47 0 0 1 4.95 10.24h5.915a17.242 17.242 0 0 0-7.885-15.28l2.244-3.845a.37.37 0 0 1 .504-.13c.255.14 9.75 16.708 9.928 16.9a.365.365 0 0 1-.327.543h-2.287c.029.612.029 1.223 0 1.831h2.297a2.206 2.206 0 0 0 1.922-3.31z", "c": "#362D59" },
    { "id": "sonarqube", "name": "SonarQube", "tier": 2, "d": "M12 0a.774.774 0 0 0-.775.775c0 .43.346.776.775.776 5.762 0 10.45 4.687 10.45 10.449 0 .43.345.775.775.775A.774.774 0 0 0 24 12c0-6.616-5.384-12-12-12zm0 3.932a.774.774 0 0 0-.775.775c0 .43.346.775.775.775A6.524 6.524 0 0 1 18.518 12c0 .43.346.775.775.775.43 0 .775-.346.775-.775 0-4.448-3.62-8.068-8.068-8.068zm0 3.925a.774.774 0 0 0-.775.776c0 .43.346.775.775.775A2.597 2.597 0 0 1 14.592 12c0 .43.346.775.775.775.43 0 .776-.346.776-.775A4.145 4.145 0 0 0 12 7.857zM.775 11.225A.774.774 0 0 0 0 12c0 6.616 5.384 12 12 12 .43 0 .775-.346.775-.775a.774.774 0 0 0-.775-.776C6.238 22.45 1.55 17.762 1.55 12a.774.774 0 0 0-.775-.775zm3.932 0a.774.774 0 0 0-.775.775c0 4.448 3.62 8.068 8.068 8.068.43 0 .775-.346.775-.775a.774.774 0 0 0-.775-.775A6.524 6.524 0 0 1 5.482 12a.774.774 0 0 0-.775-.775zm3.926 0a.774.774 0 0 0-.776.775A4.145 4.145 0 0 0 12 16.143c.43 0 .775-.347.775-.776a.774.774 0 0 0-.775-.775A2.597 2.597 0 0 1 9.408 12a.774.774 0 0 0-.775-.775z", "c": "#126ED3" },
    { "id": "storybook", "name": "Storybook", "tier": 2, "d": "M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 011.279 1.2v21.596a1.2 1.2 0 01-1.26 1.2l-16.096-.72a1.2 1.2 0 01-1.15-1.16l-.75-19.797a1.2 1.2 0 011.13-1.27L16.7.222zM13.64 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.859-4.89-3.15 0-4.899 1.72-4.899 4.29 0 4.45 5.999 4.53 5.999 6.959 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.649-.48-3.769 0-.27 4.03 2.23 5.2 5.099 5.2 2.79 0 4.969-1.49 4.969-4.18 0-4.77-6.099-4.64-6.099-6.999 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z", "c": "#FF4785" },
    { "id": "vitest", "name": "Vitest", "tier": 2, "d": "M11.545 23.3a.613.613 0 0 1-.895.197L.252 15.936A.61.61 0 0 1 0 15.439V6.325c0-.502.569-.792.975-.497l6.358 4.624c.594.433 1.432.25 1.793-.39L14.393.7a.62.62 0 0 1 .535-.314h8.455a.613.613 0 0 1 .537.916z", "c": "#00FF74" },
    { "id": "nginx", "name": "Nginx", "tier": 2, "d": "M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm6 16.59c0 .705-.646 1.29-1.529 1.29-.631 0-1.351-.255-1.801-.81l-6-7.141v6.66c0 .721-.57 1.29-1.274 1.29H7.32c-.721 0-1.29-.6-1.29-1.29V7.41c0-.705.63-1.29 1.5-1.29.646 0 1.38.255 1.83.81l5.97 7.141V7.41c0-.721.6-1.29 1.29-1.29h.075c.72 0 1.29.6 1.29 1.29v9.18H18z", "c": "#009639" },
    { "id": "pnpm", "name": "pnpm", "tier": 2, "d": "M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM2 2h3.5v3.5H2zm8.25 0h3.498v3.5H10.25zm8.25 0H22v3.5h-3.5zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zm2 2H22v3.5h-3.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z", "c": "#F69220" },
    { "id": "bitbucket", "name": "Bitbucket", "tier": 2, "d": "M.778 1.213a.768.768 0 00-.768.892l3.263 19.81c.084.5.515.868 1.022.873H19.95a.772.772 0 00.77-.646l3.27-20.03a.768.768 0 00-.768-.891zM14.52 15.53H9.522L8.17 8.466h7.561z", "c": "#0052CC" },
    { "id": "cloudflare", "name": "Cloudflare", "tier": 2, "d": "M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727", "c": "#F38020" },
    { "id": "git", "name": "Git", "tier": 2, "d": "M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z", "c": "#F03C2E" },
    { "id": "github", "name": "GitHub", "tier": 2, "d": "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12", "c": "#181717" },
    { "id": "githubactions", "name": "GitHub Actions", "tier": 2, "d": "M10.984 13.836a.5.5 0 0 1-.353-.146l-.745-.743a.5.5 0 1 1 .706-.708l.392.391 1.181-1.18a.5.5 0 0 1 .708.707l-1.535 1.533a.504.504 0 0 1-.354.146zm9.353-.147l1.534-1.532a.5.5 0 0 0-.707-.707l-1.181 1.18-.392-.391a.5.5 0 1 0-.706.708l.746.743a.497.497 0 0 0 .706-.001zM4.527 7.452l2.557-1.585A1 1 0 0 0 7.09 4.17L4.533 2.56A1 1 0 0 0 3 3.406v3.196a1.001 1.001 0 0 0 1.527.85zm2.03-2.436L4 6.602V3.406l2.557 1.61zM24 12.5c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3h-2.08a3.503 3.503 0 0 1-3.46 3 3.502 3.502 0 0 1-3.46-3h-.558c-.972 0-1.85-.399-2.482-1.042V17c0 1.654 1.346 3 3 3h.04c.244-1.693 1.7-3 3.46-3 1.93 0 3.5 1.57 3.5 3.5S13.43 24 11.5 24a3.502 3.502 0 0 1-3.46-3H8c-2.206 0-4-1.794-4-4V9.899A5.008 5.008 0 0 1 0 5c0-2.757 2.243-5 5-5s5 2.243 5 5a5.005 5.005 0 0 1-4.952 4.998A2.482 2.482 0 0 0 7.482 12h.558c.244-1.693 1.7-3 3.46-3a3.502 3.502 0 0 1 3.46 3h2.08a3.503 3.503 0 0 1 3.46-3c1.93 0 3.5 1.57 3.5 3.5zm-15 8c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5S9 19.122 9 20.5zM5 9c2.206 0 4-1.794 4-4S7.206 1 5 1 1 2.794 1 5s1.794 4 4 4zm9 3.5c0-1.378-1.122-2.5-2.5-2.5S9 11.122 9 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm9 0c0-1.378-1.122-2.5-2.5-2.5S18 11.122 18 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm-13 8a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm12 0c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3.002c-.007.001-.013.005-.021.005l-.506.017h-.017a.5.5 0 0 1-.016-.999l.506-.017c.018-.002.035.006.052.007A3.503 3.503 0 0 1 20.5 17c1.93 0 3.5 1.57 3.5 3.5zm-1 0c0-1.378-1.122-2.5-2.5-2.5S18 19.122 18 20.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5z", "c": "#2088FF" },
    { "id": "jenkins", "name": "Jenkins", "tier": 2, "d": "M2.872 24h-.975a3.866 3.866 0 01-.07-.197c-.215-.666-.594-1.49-.692-2.154-.146-.984.78-1.039 1.374-1.465.915-.66 1.635-1.025 2.627-1.62.295-.179 1.182-.624 1.281-.829.201-.408-.345-.982-.49-1.3-.225-.507-.345-.937-.376-1.435-.824-.13-1.455-.627-1.844-1.185-.63-.925-1.066-2.635-.525-3.936.045-.103.254-.305.285-.463.06-.308-.105-.72-.12-1.048-.06-1.692.284-3.15 1.425-3.66.463-1.84 2.113-2.453 3.673-3.367.58-.342 1.224-.562 1.89-.807 2.372-.877 6.027-.712 7.994.783.836.633 2.176 1.97 2.656 2.939 1.262 2.555 1.17 6.825.287 9.934-.12.421-.29 1.032-.533 1.533-.168.35-.689 1.05-.625 1.36.064.314 1.19 1.17 1.432 1.395.434.422 1.26.975 1.324 1.5.07.557-.248 1.336-.41 1.875-.217.721-.436 1.441-.654 2.131H2.87zm11.104-3.54c-.545-.3-1.361-.622-2.065-.757-.87-.164-.78 1.188-.75 1.994.03.643.36 1.316.51 1.744.076.197.09.41.256.449.3.068 1.29-.326 1.575-.479.6-.328 1.064-.844 1.574-1.189.016-.17.016-.34.03-.508a2.648 2.648 0 00-1.095-.277c.314-.15.75-.15 1.035-.332l.016-.193c-.496-.03-.69-.254-1.021-.436zm7.454 2.935a17.78 17.78 0 00.465-1.752c.06-.287.215-.918.178-1.176-.059-.459-.684-.799-1.004-1.086-.584-.525-.95-.975-1.56-1.469-.249.375-.78.615-.983.914 1.447-.689 1.71 2.625 1.141 3.69.09.329.391.45.514.735l-.086.166h1.29c.013 0 .03 0 .044.014zm-6.634-.012c-.05-.074-.1-.135-.15-.209l-.301.195h.45zm2.77 0c.008-.209.018-.404.03-.598-.53.029-.825-.48-1.196-.527-.324-.045-.6.361-1.02.195-.095.105-.183.227-.284.316.154.18.295.375.424.584h.815c.014-.164.135-.285.3-.285.165 0 .284.121.284.27h.66zm2.116 0c-.314-.479-.947-.898-1.68-.555l-.03.541h1.71zm-8.51 0l-.104-.344c-.225-.72-.36-1.26-.405-1.68-.914-.436-1.875-.87-2.654-1.426-.15-.105-1.109-1.35-1.23-1.305-1.739.676-3.359 1.86-4.814 2.984.256.557.48 1.141.69 1.74h8.505zm8.265-2.113c-.029-.512-.164-1.56-.48-1.74-.66-.39-1.846.78-2.34.943.045.15.135.271.15.48.285-.074.645-.029.898.092-.299.03-.629.03-.824.164-.074.195.016.48-.029.764.69.197 1.5.303 2.385.332.164-.227.225-.645.211-1.082zm-4.08-.36c-.044.375.046.51.12.943 1.26.391 1.034-1.74-.135-.959zM8.76 19.5c-.45.457 1.27 1.082 1.814 1.115 0-.29.165-.564.135-.77-.65-.118-1.502-.042-1.945-.347zm5.565.215c0 .043-.061.03-.068.064.58.451 1.014.545 1.802.51.354-.262.67-.563 1.043-.807-.855.074-1.931.607-2.774.23zm3.42-17.726c-1.606-.906-4.35-1.591-6.076-.731-1.38.692-3.27 1.84-3.899 3.292.6 1.402-.166 2.686-.226 4.109-.018.757.36 1.42.391 2.242-.2.338-.825.38-1.26.356-.146-.729-.4-1.549-1.155-1.63-1.064-.116-1.845.764-1.89 1.683-.06 1.08.833 2.864 2.085 2.745.488-.046.608-.54 1.139-.54.285.57-.445.75-.523 1.154-.016.105.06.511.104.705.233.944.744 2.16 1.245 2.88.635.9 1.884 1.051 3.229 1.141.24-.525 1.125-.48 1.706-.346-.691-.27-1.336-.945-1.875-1.529-.615-.676-1.23-1.41-1.261-2.28 1.155 1.604 2.1 3 4.2 3.704 1.59.525 3.45-.254 4.664-1.109.51-.359.811-.93 1.17-1.439 1.35-1.936 1.98-4.71 1.846-7.394-.06-1.111-.06-2.221-.436-2.955-.389-.781-1.695-1.471-2.475-.781-.15-.764.63-1.23 1.545-.96-.66-.854-1.336-1.858-2.266-2.384zM13.58 14.896c.615 1.544 2.724 1.363 4.505 1.323-.084.194-.256.435-.465.515-.57.232-2.145.408-2.937-.012-.506-.27-.824-.873-1.102-1.227-.137-.172-.795-.608-.012-.609zm.164-.87c.893.464 2.52.517 3.731.48.066.267.066.593.068.913-1.55.08-3.386-.304-3.794-1.395h-.005zm6.675-.586c-.473.9-1.145 1.897-2.539 1.928-.023-.284-.045-.735 0-.904 1.064-.103 1.727-.646 2.543-1.017zm-.649-.667c-1.02.66-2.154 1.375-3.824 1.21-.351-.31-.485-1-.14-1.458.181.313.06.885.57.97.944.165 2.038-.579 2.73-.84.42-.713-.046-.976-.42-1.433-.782-.93-1.83-2.1-1.802-3.51.314-.224.346.346.391.45.404.96 1.424 2.175 2.174 3 .18.21.48.39.51.524.092.39-.254.854-.209 1.11zm-13.439-.675c-.314-.184-.393-.99-.768-1.01-.535-.03-.438 1.05-.436 1.68-.37-.33-.435-1.365-.164-1.89-.308-.15-.445.164-.618.284.22-1.59 2.34-.734 1.99.96zM4.713 5.995c-.685.756-.54 2.174-.459 3.188 1.244-.785 2.898.06 2.883 1.394.595-.016.223-.744.115-1.215-.353-1.528.592-3.187.041-4.59-1.064.084-1.939.52-2.578 1.215zm9.12 1.113c.307.562.404 1.148.84 1.57.195.19.574.424.387.95-.045.121-.365.391-.551.45-.674.195-2.254.03-1.721-.81.563.015 1.314.36 1.732-.045-.314-.524-.885-1.53-.674-2.13zm6.198-.013h.068c.33.668.6 1.375 1.004 1.965-.27.628-2.053 1.19-2.023.057.39-.17 1.05-.035 1.395-.25-.193-.556-.48-1.006-.434-1.771zm-6.927-1.617c-1.422-.33-2.131.592-2.56 1.553-.384-.094-.231-.615-.135-.883.255-.701 1.28-1.633 2.119-1.506.359.057.848.386.576.834zM9.642 1.593c-1.56.44-3.56 1.574-4.2 2.974.495-.07.84-.321 1.33-.351.186-.016.428.074.641.015.424-.104.78-1.065 1.102-1.41.31-.345.685-.496.94-.81.167-.09.409-.074.42-.33-.073-.075-.15-.135-.232-.105v.017z", "c": "#D24939" },
    { "id": "linux", "name": "Linux", "tier": 2, "d": "M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z", "c": "#FCC624" },
    { "id": "netlify", "name": "Netlify", "tier": 2, "d": "M6.49 19.04h-.23L5.13 17.9v-.23l1.73-1.71h1.2l.15.15v1.2L6.5 19.04ZM5.13 6.31V6.1l1.13-1.13h.23L8.2 6.68v1.2l-.15.15h-1.2L5.13 6.31Zm9.96 9.09h-1.65l-.14-.13v-3.83c0-.68-.27-1.2-1.1-1.23-.42 0-.9 0-1.43.02l-.07.08v4.96l-.14.14H8.9l-.13-.14V8.73l.13-.14h3.7a2.6 2.6 0 0 1 2.61 2.6v4.08l-.13.14Zm-8.37-2.44H.14L0 12.82v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14Zm17.14 0h-6.58l-.14-.14v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14ZM11.05 6.55V1.64l.14-.14h1.65l.14.14v4.9l-.14.14h-1.65l-.14-.13Zm0 15.81v-4.9l.14-.14h1.65l.14.13v4.91l-.14.14h-1.65l-.14-.14Z", "c": "#00C7B7" },
    { "id": "railway", "name": "Railway", "tier": 2, "d": "M.113 10.27A13.026 13.026 0 000 11.48h18.23c-.064-.125-.15-.237-.235-.347-3.117-4.027-4.793-3.677-7.19-3.78-.8-.034-1.34-.048-4.524-.048-1.704 0-3.555.005-5.358.01-.234.63-.459 1.24-.567 1.737h9.342v1.216H.113v.002zm18.26 2.426H.009c.02.326.05.645.094.961h16.955c.754 0 1.179-.429 1.315-.96zm-17.318 4.28s2.81 6.902 10.93 7.024c4.855 0 9.027-2.883 10.92-7.024H1.056zM11.988 0C7.5 0 3.593 2.466 1.531 6.108l4.75-.005v-.002c3.71 0 3.849.016 4.573.047l.448.016c1.563.052 3.485.22 4.996 1.364.82.621 2.007 1.99 2.712 2.965.654.902.842 1.94.396 2.934-.408.914-1.289 1.458-2.353 1.458H.391s.099.42.249.886h22.748A12.026 12.026 0 0024 12.005C24 5.377 18.621 0 11.988 0z", "c": "#0B0D0E" },
    { "id": "tailscale", "name": "Tailscale", "tier": 2, "d": "M24 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-9 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm0-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6-6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM3 24a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm18 .5a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM6 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm9-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM3 5.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z", "c": "#242424" },
    { "id": "googlesearchconsole", "name": "Google Search Console", "tier": 2, "d": "M8.548 1.156L6.832 2.872v1.682h1.716zm0 3.398v.035H6.832v-.035H3.386L0 7.844v3.577h2.826V8.94c0-.525.429-.954.954-.954h16.476c.525 0 .954.43.954.954v2.48h2.754V7.844l-3.386-3.29H17.3v.035h-1.717v-.035zm7.035 0H17.3V2.872l-1.717-1.716zM8.679 1.188V2.84h6.773V1.188zm11.471 7.07a.834.834 0 00-.132.01l-.543.002c-5.216.014-10.432-.008-15.648.01-.435-.063-.794.436-.716.883v2.264h17.812c-.016-.888.045-1.782-.034-2.666-.104-.342-.427-.502-.739-.502zm-15.422.634a.689.698 0 01.689.698.689.698 0 01-.689.697.689.698 0 01-.688-.697.689.698 0 01.688-.698zm2.134 0a.689.698 0 01.689.698.689.698 0 01-.689.697.689.698 0 01-.688-.697.689.698 0 01.688-.698zM.036 11.645v9.156c0 1.05.858 1.908 1.907 1.908h.883V11.645zm21.174 0v11.064h.882c1.05 0 1.908-.858 1.908-1.908v-9.156zM4.057 13.133v6.85h6.137v-6.85zm13.243.021v3.777l-1.708.977-1.708-.977v-3.758a4.006 4.006 0 000 7.23v2.441h3.457v-2.442a4.006 4.006 0 00-.041-7.248zm-13.243 8.26v1.43h7.925v-1.43z", "c": "#458CF5" },
    { "id": "huggingface", "name": "Hugging Face", "tier": 2, "d": "M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378 0 1.112.178 2.181.503 3.185.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284.278.173.48.408.71.694.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542.01.026.653 1.552 1.657 2.54.616.605 1.01 1.223 1.082 1.912.055.537-.096 1.059-.38 1.572.637.121 1.294.187 1.967.187.657 0 1.298-.063 1.921-.178-.287-.517-.44-1.041-.384-1.581.07-.69.465-1.307 1.081-1.913 1.004-.987 1.647-2.513 1.657-2.539.021-.074.083-.285.233-.542.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952.23-.286.432-.52.71-.694.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174 1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013 1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164 1.607-.007 2.984-1.155 3.572-1.164.196-.003.305.12.305.454 0 .886-.424 2.328-1.563 3.202-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026-.01.008-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116 1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243 1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444-.034-.016-.104-.008-.2.022q-.094.03-.216.087-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096 3 3 0 0 0-.26.219 2 2 0 0 0-.12.121 2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203 0-.334.109-.457.305-.454m.836 10.354c.824-1.19.766-2.082-.365-3.194-1.13-1.112-1.789-2.738-1.789-2.738s-.246-.945-.806-.858-.97 1.499.202 2.362c1.173.864-.233 1.45-.685.64-.45-.812-1.683-2.896-2.322-3.295s-1.089-.175-.938.647 2.822 2.813 2.562 3.244-1.176-.506-1.176-.506-2.866-2.567-3.49-1.898.473 1.23 2.037 2.16c1.564.932 1.686 1.178 1.464 1.53s-3.675-2.511-4-1.297c-.323 1.214 3.524 1.567 3.287 2.405-.238.839-2.71-1.587-3.216-.642-.506.946 3.49 2.056 3.522 2.064 1.29.33 4.568 1.028 5.713-.624m5.349 0c-.824-1.19-.766-2.082.365-3.194 1.13-1.112 1.789-2.738 1.789-2.738s.246-.945.806-.858.97 1.499-.202 2.362c-1.173.864.233 1.45.685.64.451-.812 1.683-2.896 2.322-3.295s1.089-.175.938.647-2.822 2.813-2.562 3.244 1.176-.506 1.176-.506 2.866-2.567 3.49-1.898-.473 1.23-2.037 2.16c-1.564.932-1.686 1.178-1.464 1.53s3.675-2.511 4-1.297c.323 1.214-3.524 1.567-3.287 2.405.238.839 2.71-1.587 3.216-.642.506.946-3.49 2.056-3.522 2.064-1.29.33-4.568 1.028-5.713-.624", "c": "#FFD21E" },
    { "id": "numpy", "name": "NumPy", "tier": 2, "d": "M10.315 4.876L6.3048 2.8517l-4.401 2.1965 4.1186 2.0683zm1.8381.9277l4.2045 2.1223-4.3622 2.1906-4.125-2.0718zm5.6153-2.9213l4.3193 2.1658-3.863 1.9402-4.2131-2.1252zm-1.859-.9329L12.021 0 8.1742 1.9193l4.0068 2.0208zm-3.0401 16.7443V24l4.7107-2.3507-.0053-5.3085zm4.7037-4.2057l-.0052-5.2528-4.6985 2.3356v5.2546zm5.6553-.9845v5.327l-4.0178 2.0052-.0029-5.3028zm0-1.8626V6.4214l-4.0253 2.001.0034 5.2633zM11.2062 11.571L8.0333 9.9756v6.895s-3.8804-8.2564-4.2399-8.998c-.0463-.0957-.2371-.2007-.2858-.2262C2.8118 7.2812.773 6.2485.773 6.2485V18.43l2.8204 1.5076v-6.3674s3.8392 7.3775 3.878 7.458c.0389.0807.4245.8582.8362 1.1314.5485.363 2.8992 1.7766 2.8992 1.7766z", "c": "#013243" },
    { "id": "ollama", "name": "Ollama", "tier": 2, "d": "M16.361 10.26a.894.894 0 0 0-.558.47l-.072.148.001.207c0 .193.004.217.059.353.076.193.152.312.291.448.24.238.51.3.872.205a.86.86 0 0 0 .517-.436.752.752 0 0 0 .08-.498c-.064-.453-.33-.782-.724-.897a1.06 1.06 0 0 0-.466 0zm-9.203.005c-.305.096-.533.32-.65.639a1.187 1.187 0 0 0-.06.52c.057.309.31.59.598.667.362.095.632.033.872-.205.14-.136.215-.255.291-.448.055-.136.059-.16.059-.353l.001-.207-.072-.148a.894.894 0 0 0-.565-.472 1.02 1.02 0 0 0-.474.007Zm4.184 2c-.131.071-.223.25-.195.383.031.143.157.288.353.407.105.063.112.072.117.136.004.038-.01.146-.029.243-.02.094-.036.194-.036.222.002.074.07.195.143.253.064.052.076.054.255.059.164.005.198.001.264-.03.169-.082.212-.234.15-.525-.052-.243-.042-.28.087-.355.137-.08.281-.219.324-.314a.365.365 0 0 0-.175-.48.394.394 0 0 0-.181-.033c-.126 0-.207.03-.355.124l-.085.053-.053-.032c-.219-.13-.259-.145-.391-.143a.396.396 0 0 0-.193.032zm.39-2.195c-.373.036-.475.05-.654.086-.291.06-.68.195-.951.328-.94.46-1.589 1.226-1.787 2.114-.04.176-.045.234-.045.53 0 .294.005.357.043.524.264 1.16 1.332 2.017 2.714 2.173.3.033 1.596.033 1.896 0 1.11-.125 2.064-.727 2.493-1.571.114-.226.169-.372.22-.602.039-.167.044-.23.044-.523 0-.297-.005-.355-.045-.531-.288-1.29-1.539-2.304-3.072-2.497a6.873 6.873 0 0 0-.855-.031zm.645.937a3.283 3.283 0 0 1 1.44.514c.223.148.537.458.671.662.166.251.26.508.303.82.02.143.01.251-.043.482-.08.345-.332.705-.672.957a3.115 3.115 0 0 1-.689.348c-.382.122-.632.144-1.525.138-.582-.006-.686-.01-.853-.042-.57-.107-1.022-.334-1.35-.68-.264-.28-.385-.535-.45-.946-.03-.192.025-.509.137-.776.136-.326.488-.73.836-.963.403-.269.934-.46 1.422-.512.187-.02.586-.02.773-.002zm-5.503-11a1.653 1.653 0 0 0-.683.298C5.617.74 5.173 1.666 4.985 2.819c-.07.436-.119 1.04-.119 1.503 0 .544.064 1.24.155 1.721.02.107.031.202.023.208a8.12 8.12 0 0 1-.187.152 5.324 5.324 0 0 0-.949 1.02 5.49 5.49 0 0 0-.94 2.339 6.625 6.625 0 0 0-.023 1.357c.091.78.325 1.438.727 2.04l.13.195-.037.064c-.269.452-.498 1.105-.605 1.732-.084.496-.095.629-.095 1.294 0 .67.009.803.088 1.266.095.555.288 1.143.503 1.534.071.128.243.393.264.407.007.003-.014.067-.046.141a7.405 7.405 0 0 0-.548 1.873c-.062.417-.071.552-.071.991 0 .56.031.832.148 1.279L3.42 24h1.478l-.05-.091c-.297-.552-.325-1.575-.068-2.597.117-.472.25-.819.498-1.296l.148-.29v-.177c0-.165-.003-.184-.057-.293a.915.915 0 0 0-.194-.25 1.74 1.74 0 0 1-.385-.543c-.424-.92-.506-2.286-.208-3.451.124-.486.329-.918.544-1.154a.787.787 0 0 0 .223-.531c0-.195-.07-.355-.224-.522a3.136 3.136 0 0 1-.817-1.729c-.14-.96.114-2.005.69-2.834.563-.814 1.353-1.336 2.237-1.475.199-.033.57-.028.776.01.226.04.367.028.512-.041.179-.085.268-.19.374-.431.093-.215.165-.333.36-.576.234-.29.46-.489.822-.729.413-.27.884-.467 1.352-.561.17-.035.25-.04.569-.04.319 0 .398.005.569.04a4.07 4.07 0 0 1 1.914.997c.117.109.398.457.488.602.034.057.095.177.132.267.105.241.195.346.374.43.14.068.286.082.503.045.343-.058.607-.053.943.016 1.144.23 2.14 1.173 2.581 2.437.385 1.108.276 2.267-.296 3.153-.097.15-.193.27-.333.419-.301.322-.301.722-.001 1.053.493.539.801 1.866.708 3.036-.062.772-.26 1.463-.533 1.854a2.096 2.096 0 0 1-.224.258.916.916 0 0 0-.194.25c-.054.109-.057.128-.057.293v.178l.148.29c.248.476.38.823.498 1.295.253 1.008.231 2.01-.059 2.581a.845.845 0 0 0-.044.098c0 .006.329.009.732.009h.73l.02-.074.036-.134c.019-.076.057-.3.088-.516.029-.217.029-1.016 0-1.258-.11-.875-.295-1.57-.597-2.226-.032-.074-.053-.138-.046-.141.008-.005.057-.074.108-.152.376-.569.607-1.284.724-2.228.031-.26.031-1.378 0-1.628-.083-.645-.182-1.082-.348-1.525a6.083 6.083 0 0 0-.329-.7l-.038-.064.131-.194c.402-.604.636-1.262.727-2.04a6.625 6.625 0 0 0-.024-1.358 5.512 5.512 0 0 0-.939-2.339 5.325 5.325 0 0 0-.95-1.02 8.097 8.097 0 0 1-.186-.152.692.692 0 0 1 .023-.208c.208-1.087.201-2.443-.017-3.503-.19-.924-.535-1.658-.98-2.082-.354-.338-.716-.482-1.15-.455-.996.059-1.8 1.205-2.116 3.01a6.805 6.805 0 0 0-.097.726c0 .036-.007.066-.015.066a.96.96 0 0 1-.149-.078A4.857 4.857 0 0 0 12 3.03c-.832 0-1.687.243-2.456.698a.958.958 0 0 1-.148.078c-.008 0-.015-.03-.015-.066a6.71 6.71 0 0 0-.097-.725C8.997 1.392 8.337.319 7.46.048a2.096 2.096 0 0 0-.585-.041Zm.293 1.402c.248.197.523.759.682 1.388.03.113.06.244.069.292.007.047.026.152.041.233.067.365.098.76.102 1.24l.002.475-.12.175-.118.178h-.278c-.324 0-.646.041-.954.124l-.238.06c-.033.007-.038-.003-.057-.144a8.438 8.438 0 0 1 .016-2.323c.124-.788.413-1.501.696-1.711.067-.05.079-.049.157.013zm9.825-.012c.17.126.358.46.498.888.28.854.36 2.028.212 3.145-.019.14-.024.151-.057.144l-.238-.06a3.693 3.693 0 0 0-.954-.124h-.278l-.119-.178-.119-.175.002-.474c.004-.669.066-1.19.214-1.772.157-.623.434-1.185.68-1.382.078-.062.09-.063.159-.012z", "c": "#000000" },
    { "id": "pandas", "name": "pandas", "tier": 2, "d": "M16.922 0h2.623v18.104h-2.623zm-4.126 12.94h2.623v2.57h-2.623zm0-7.037h2.623v5.446h-2.623zm0 11.197h2.623v5.446h-2.623zM4.456 5.896h2.622V24H4.455zm4.213 2.559h2.623v2.57H8.67zm0 4.151h2.623v5.447H8.67zm0-11.187h2.623v5.446H8.67Z", "c": "#150458" },
    { "id": "pytorch", "name": "PyTorch", "tier": 2, "d": "M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0c3.984-3.9 3.986-10.205.085-14.023l-1.744 1.743c2.904 2.905 2.904 7.634 0 10.538s-7.634 2.904-10.538 0-2.904-7.634 0-10.538l4.647-4.646.582-.665zm3.568 3.899a1.327 1.327 0 00-1.327 1.327 1.327 1.327 0 001.327 1.328A1.327 1.327 0 0016.9 5.226 1.327 1.327 0 0015.573 3.9z", "c": "#EE4C2C" },
    { "id": "scikitlearn", "name": "scikit-learn", "tier": 2, "d": "M15.601 5.53c-1.91.035-3.981.91-5.63 2.56-2.93 2.93-2.083 8.53-1.088 9.525.805.804 6.595 1.843 9.526-1.088a9.74 9.74 0 0 0 .584-.643c.043-.292.205-.66.489-1.106a1.848 1.848 0 0 1-.537.176c-.144.265-.37.55-.676.855-.354.335-.607.554-.76.656a.795.795 0 0 1-.437.152c-.35 0-.514-.308-.494-.924-.22.316-.425.549-.612.7a.914.914 0 0 1-.578.224c-.194 0-.36-.09-.496-.273a1.03 1.03 0 0 1-.193-.507 4.016 4.016 0 0 1-.726.583c-.224.132-.47.197-.74.197-.3 0-.543-.096-.727-.288a.978.978 0 0 1-.257-.524v.004c-.3.276-.564.48-.79.611a1.295 1.295 0 0 1-.649.197.693.693 0 0 1-.571-.275c-.145-.183-.218-.43-.218-.739 0-.464.101-1.02.302-1.67.201-.65.445-1.25.733-1.797l.842-.312a.21.21 0 0 1 .06-.013c.063 0 .116.047.157.14.04.095.061.221.061.38 0 .451-.104.888-.312 1.31-.207.422-.532.873-.974 1.352-.018.23-.027.388-.027.474 0 .193.036.345.106.458.071.113.165.169.282.169a.71.71 0 0 0 .382-.13c.132-.084.333-.26.602-.523.028-.418.187-.798.482-1.142.324-.38.685-.569 1.08-.569.206 0 .37.054.494.16a.524.524 0 0 1 .186.417c0 .458-.486.829-1.459 1.114.088.43.32.646.693.646a.807.807 0 0 0 .417-.117c.129-.076.321-.243.575-.497.032-.252.118-.495.259-.728.182-.3.416-.544.701-.73.285-.185.537-.278.756-.278.276 0 .47.127.58.381l.677-.374h.186l-.292.971c-.15.488-.226.823-.226 1.004 0 .19.067.285.202.285.086 0 .181-.045.285-.137.104-.092.25-.232.437-.42v.001c.143-.155.274-.32.392-.494-.19-.084-.285-.21-.285-.375 0-.17.058-.352.174-.545.116-.194.275-.29.479-.29.172 0 .258.088.258.265 0 .139-.05.338-.149.596.367-.04.687-.32.961-.842l.228-.01c1.059-2.438.828-5.075-.83-6.732-1.019-1.02-2.408-1.5-3.895-1.471zm4.725 8.203a8.938 8.938 0 0 1-1.333 2.151 1.09 1.09 0 0 0-.012.147c0 .168.047.309.14.423.092.113.206.17.34.17.296 0 .714-.264 1.254-.787-.001.04-.003.08-.003.121 0 .146.012.368.036.666l.733-.172c0-.2.003-.357.01-.474.01-.157.033-.33.066-.517.02-.11.07-.216.152-.315l.186-.216a5.276 5.276 0 0 1 .378-.397c.062-.055.116-.099.162-.13a.26.26 0 0 1 .123-.046c.055 0 .083.035.083.106 0 .07-.052.236-.156.497-.194.486-.292.848-.292 1.084 0 .175.046.314.136.418a.45.45 0 0 0 .358.155c.365 0 .803-.269 1.313-.808v-.381c-.361.426-.623.64-.784.64-.109 0-.163-.067-.163-.2 0-.1.065-.316.195-.65.19-.486.285-.836.285-1.048a.464.464 0 0 0-.112-.319.36.36 0 0 0-.282-.127c-.165 0-.354.077-.567.233-.213.156-.5.436-.863.84.053-.262.165-.622.335-1.08l-.809.156a6.54 6.54 0 0 0-.399 1.074c-.04.156-.07.316-.092.48a7.447 7.447 0 0 1-.49.45.38.38 0 0 1-.229.08.208.208 0 0 1-.174-.082.352.352 0 0 1-.064-.222c0-.1.019-.214.056-.343.038-.13.12-.373.249-.731l.308-.849zm-17.21-2.927c-.863-.016-1.67.263-2.261.854-1.352 1.352-1.07 3.827.631 5.527 1.7 1.701 4.95 1.21 5.527.632.467-.466 1.07-3.827-.631-5.527-.957-.957-2.158-1.465-3.267-1.486zm12.285.358h.166v.21H15.4zm.427 0h.166v.865l.46-.455h.195l-.364.362.428.684h-.198l-.357-.575-.164.166v.41h-.166zm1.016 0h.166v.21h-.166zm.481.122h.166v.288h.172v.135h-.172v.717c0 .037.006.062.02.075.012.013.037.02.074.02a.23.23 0 0 0 .078-.01v.141a.802.802 0 0 1-.136.014.23.23 0 0 1-.15-.043.15.15 0 0 1-.052-.123v-.79h-.141v-.136h.141zm-3.562.258c.081 0 .15.012.207.038.057.024.1.061.13.11s.045.106.045.173h-.176c-.006-.111-.075-.167-.208-.167a.285.285 0 0 0-.164.041.134.134 0 0 0-.06.117c0 .035.015.065.045.088.03.024.08.044.15.06l.16.039a.47.47 0 0 1 .224.105c.047.046.07.108.07.186a.3.3 0 0 1-.052.175.327.327 0 0 1-.152.116.585.585 0 0 1-.226.041c-.136 0-.24-.03-.309-.088-.069-.059-.105-.149-.109-.269h.176c.004.037.01.065.017.084a.166.166 0 0 0 .034.054c.044.043.112.065.204.065a.31.31 0 0 0 .177-.045.139.139 0 0 0 .067-.119.116.116 0 0 0-.038-.09.287.287 0 0 0-.124-.055l-.156-.038a1.248 1.248 0 0 1-.159-.05.359.359 0 0 1-.098-.061.22.22 0 0 1-.058-.083.32.32 0 0 1-.016-.108c0-.096.036-.174.109-.232a.45.45 0 0 1 .29-.087zm1.035 0a.46.46 0 0 1 .202.043.351.351 0 0 1 .187.212.577.577 0 0 1 .023.126h-.168a.256.256 0 0 0-.078-.168.242.242 0 0 0-.17-.06.248.248 0 0 0-.155.05.306.306 0 0 0-.1.144.662.662 0 0 0-.034.224.58.58 0 0 0 .035.214.299.299 0 0 0 .101.135.261.261 0 0 0 .157.048c.142 0 .227-.084.256-.252h.167a.519.519 0 0 1-.065.22.35.35 0 0 1-.146.138.464.464 0 0 1-.216.048.448.448 0 0 1-.246-.066.441.441 0 0 1-.161-.192.703.703 0 0 1-.057-.293c0-.085.01-.163.032-.233a.522.522 0 0 1 .095-.182.403.403 0 0 1 .15-.117.453.453 0 0 1 .191-.04zm.603.03h.166v1.046H15.4zm1.443 0h.166v1.046h-.166zm-5.05.618c-.08 0-.2.204-.356.611-.155.407-.308.977-.459 1.71.281-.312.509-.662.683-1.05.175-.387.262-.72.262-.999a.455.455 0 0 0-.036-.197c-.025-.05-.056-.075-.093-.075zm4.662 1.797c-.221 0-.431.188-.629.563-.197.376-.296.722-.296 1.038 0 .12.029.216.088.29a.273.273 0 0 0 .223.111c.221 0 .43-.188.625-.565.196-.377.294-.725.294-1.043a.457.457 0 0 0-.083-.29.269.269 0 0 0-.222-.104zm-2.848.007c-.146 0-.285.11-.417.333-.133.222-.2.51-.2.866.566-.159.849-.452.849-.881 0-.212-.077-.318-.232-.318Z", "c": "#F7931E" },
    { "id": "streamlit", "name": "Streamlit", "tier": 2, "d": "M16.673 11.32l6.862-3.618c.233-.136.554.12.442.387L20.463 17.1zm-8.556-.229l3.473-5.187c.203-.328.578-.316.793-.028l7.886 11.75zm-3.375 7.25c-.28 0-.835-.284-.993-.716l-3.72-9.46c-.118-.331.139-.614.48-.464l19.474 10.306c-.149.147-.453.337-.72.334z", "c": "#FF4B4B" },
    { "id": "tensorflow", "name": "TensorFlow", "tier": 2, "d": "M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z", "c": "#FF6F00" },
    { "id": "bolt", "name": "Bolt", "tier": 2, "d": "M8.64368 11.7731C7.91976 11.7731 7.20901 11.5147 6.80099 10.9591L6.65707 11.6143L4 13L4.28684 11.6143L6.22186 3H8.59103L7.9066 6.03634C8.45941 5.44199 8.97273 5.22234 9.63083 5.22234C11.0523 5.22234 12 6.1397 12 7.81938C12 9.55074 10.9076 11.7731 8.64368 11.7731ZM9.55186 8.31036C9.55186 9.11144 8.97273 9.71871 8.22249 9.71871C7.8013 9.71871 7.4196 9.56366 7.16952 9.29233L7.53806 7.70309C7.81447 7.43176 8.13036 7.27671 8.49889 7.27671C9.06486 7.27671 9.55186 7.69017 9.55186 8.31036Z", "c": "#000000", "vb": "3.2 2.2 9.6 11.6", "fr": "evenodd" },
    { "id": "lovable", "name": "Lovable", "tier": 2, "d": "M15.42 10.35h-1.77V8.33a5.32 5.32 0 1 0-10.64 0V21h12.42c2.94 0 5.32-2.38 5.32-5.33s-2.38-5.33-5.32-5.33Z", "c": "#FF6154", "vb": "0 0 24 24" },
    { "id": "v0", "name": "v0", "tier": 2, "d": "M14.066 6.028v2.22h5.729q.075-.001.148.005l-5.853 5.752a2 2 0 0 1-.024-.309V8.247h-2.353v5.45c0 2.322 1.935 4.222 4.258 4.222h5.675v-2.22h-5.675q-.03 0-.059-.003l5.729-5.629q.006.082.006.166v5.465H24v-5.465a4.204 4.204 0 0 0-4.205-4.205zM0 8.245l8.28 9.266c.839.94 2.396.346 2.396-.914V8.245H8.19v5.44l-4.86-5.44Z", "c": "#000000" },
    { "id": "figma", "name": "Figma", "tier": 2, "d": "M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z", "c": "#F24E1E" },
    { "id": "jira", "name": "Jira", "tier": 2, "d": "M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0Z", "c": "#0052CC" },
    { "id": "n8n", "name": "n8n", "tier": 2, "d": "M4.8 16.8c.45 0 .6-.15.6-.6V15c0-1.8.6-2.4 2.4-2.4H9c1.8 0 2.4.6 2.4 2.4v1.2c0 .45.15.6.6.6s.6-.15.6-.6V15c0-1.8.6-2.4 2.4-2.4h1.2c1.8 0 2.4.6 2.4 2.4v1.2c0 .45.15.6.6.6s.6-.15.6-.6V15c0-1.8.6-2.4 2.4-2.4h1.2c.45 0 .6-.15.6-.6s-.15-.6-.6-.6h-1.2c-1.8 0-2.4-.6-2.4-2.4V7.8c0-.45-.15-.6-.6-.6s-.6.15-.6.6V9c0 1.8-.6 2.4-2.4 2.4H15c-1.8 0-2.4-.6-2.4-2.4V7.8c0-.45-.15-.6-.6-.6s-.6.15-.6.6V9c0 1.8-.6 2.4-2.4 2.4H7.8c-1.8 0-2.4-.6-2.4-2.4V7.8c0-.45-.15-.6-.6-.6s-.6.15-.6.6V9c0 1.8-.6 2.4-2.4 2.4H.6c-.45 0-.6.15-.6.6s.15.6.6.6h1.2c1.8 0 2.4.6 2.4 2.4v1.2c0 .45.15.6.6.6", "c": "#FF91AC" },
    { "id": "obsidian", "name": "Obsidian", "tier": 2, "d": "M19.355 18.538a68.967 68.959 0 0 0 1.858-2.954.81.81 0 0 0-.062-.9c-.516-.685-1.504-2.075-2.042-3.362-.553-1.321-.636-3.375-.64-4.377a1.707 1.707 0 0 0-.358-1.05l-3.198-4.064a3.744 3.744 0 0 1-.076.543c-.106.503-.307 1.004-.536 1.5-.134.29-.29.6-.446.914l-.31.626c-.516 1.068-.997 2.227-1.132 3.59-.124 1.26.046 2.73.815 4.481.128.011.257.025.386.044a6.363 6.363 0 0 1 3.326 1.505c.916.79 1.744 1.922 2.415 3.5zM8.199 22.569c.073.012.146.02.22.02.78.024 2.095.092 3.16.29.87.16 2.593.64 4.01 1.055 1.083.316 2.198-.548 2.355-1.664.114-.814.33-1.735.725-2.58l-.01.005c-.67-1.87-1.522-3.078-2.416-3.849a5.295 5.295 0 0 0-2.778-1.257c-1.54-.216-2.952.19-3.84.45.532 2.218.368 4.829-1.425 7.531zM5.533 9.938c-.023.1-.056.197-.098.29L2.82 16.059a1.602 1.602 0 0 0 .313 1.772l4.116 4.24c2.103-3.101 1.796-6.02.836-8.3-.728-1.73-1.832-3.081-2.55-3.831zM9.32 14.01c.615-.183 1.606-.465 2.745-.534-.683-1.725-.848-3.233-.716-4.577.154-1.552.7-2.847 1.235-3.95.113-.235.223-.454.328-.664.149-.297.288-.577.419-.86.217-.47.379-.885.46-1.27.08-.38.08-.72-.014-1.043-.095-.325-.297-.675-.68-1.06a1.6 1.6 0 0 0-1.475.36l-4.95 4.452a1.602 1.602 0 0 0-.513.952l-.427 2.83c.672.59 2.328 2.316 3.335 4.711.09.21.175.43.253.653z", "c": "#7C3AED" },
    { "id": "photoshop", "name": "Photoshop", "tier": 2, "d": "M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z", "c": "#31A8FF" },
    { "id": "zeplin", "name": "Zeplin", "tier": 2, "d": "m39.458 141.089l-13.392 4.892l-.72 39.841l46.36-16.936c-15.9-5.34-27.512-14.738-32.248-27.797 M46.467 98.95L0 115.925l26.066 30.056l13.392-4.892c-4.722-13.021-1.81-27.74 7.009-42.139 M124.662 41.462c-59.171 21.616-97.318 66.22-85.204 99.627L253.735 62.81c-12.114-33.407-69.902-42.965-129.073-21.35 M168.532 162.438c59.17-21.616 97.39-66.023 85.203-99.627L39.458 141.089c12.186 33.604 69.903 42.964 129.074 21.349 M253.735 62.81L39.458 141.09c4.196 11.57 20.196 17.27 42.647 17.27c21.887 0 49.905-5.413 79.115-16.084c59.171-21.616 100.802-56.614 92.515-79.464 M211.089 45.54c-21.888 0-49.906 5.414-79.116 16.084c-59.17 21.616-100.801 56.614-92.515 79.465L253.735 62.81c-4.195-11.57-20.195-17.27-42.645-17.27 M199.255 187.932h-.002c-6.304 0-15.605-5.695-27.644-16.926c-14.244-13.287-30.56-32.748-45.942-54.799c-15.383-22.05-28.023-44.094-35.592-62.072c-8.247-19.593-9.423-31.64-3.495-35.806c1.3-.913 2.867-1.375 4.656-1.375c4.822 0 14.217 3.59 31.59 20.693l.38.374l-.052.531a227 227 0 0 0-.326 3.685l-.193 2.416l-1.705-1.717c-18.718-18.858-26.958-20.894-29.632-20.894c-.763 0-1.37.155-1.805.461c-2.572 1.807-2.737 10.655 5.258 29.648c7.434 17.658 19.89 39.37 35.074 61.133c15.185 21.766 31.25 40.94 45.24 53.99c15.084 14.071 21.882 15.59 24.104 15.59c.767 0 1.391-.164 1.853-.49c2.713-1.905 2.716-11.384-6.2-31.827l-.41-.938l.897-.49c.896-.491 1.763-.974 2.575-1.436l1.074-.61l.494 1.133c6.322 14.485 12.232 32.895 4.483 38.343c-1.306.917-2.88 1.383-4.68 1.383m-.002-2.235h.002l-.001 1.117z m169.968 161.827l-.09 1.113c-1.496 18.51-5.435 40.764-15.705 41.664q-.31.028-.635.028c-6.976 0-13.577-9.996-19.617-29.71c-5.716-18.651-10.15-43.693-12.488-70.513c-2.338-26.815-2.303-52.25.098-71.618C124.15 11.685 129.132.662 136.341.03c.214-.02.435-.03.653-.03c5.061 0 12.689 5.73 20.497 32.424l-5.098.984c-2.607-8.92-5.449-16.175-8.27-21.16c-2.609-4.611-5.146-7.15-7.143-7.15q-.1 0-.197.007c-3.125.275-7.676 7.855-10.214 28.315c-2.358 19.022-2.387 44.075-.08 70.545c2.309 26.474 6.671 51.142 12.284 69.46c2.513 8.203 5.27 14.964 7.973 19.552c2.492 4.23 4.904 6.56 6.79 6.56q.098 0 .195-.008c2.99-.262 8.625-8.15 10.996-35.904z", "c": "#FDBD39", "vb": "0 0 256 205", "fr": "evenodd" },
    { "id": "kafka", "name": "Kafka", "tier": 2, "d": "M9.71 2.136a1.43 1.43 0 0 0-2.047 0h-.007a1.48 1.48 0 0 0-.421 1.042c0 .41.161.777.422 1.039l.007.007c.257.264.616.426 1.019.426.404 0 .766-.162 1.027-.426l.003-.007c.261-.262.421-.629.421-1.039 0-.408-.159-.777-.421-1.042H9.71zM8.683 22.295c.404 0 .766-.167 1.027-.429l.003-.008c.261-.261.421-.631.421-1.036 0-.41-.159-.778-.421-1.044H9.71a1.42 1.42 0 0 0-1.027-.432 1.4 1.4 0 0 0-1.02.432h-.007c-.26.266-.422.634-.422 1.044 0 .406.161.775.422 1.036l.007.008c.258.262.617.429 1.02.429zm7.89-4.462c.359-.096.683-.33.882-.684l.027-.052a1.47 1.47 0 0 0 .114-1.067 1.454 1.454 0 0 0-.675-.896l-.021-.014a1.425 1.425 0 0 0-1.078-.132c-.36.091-.684.335-.881.686-.2.349-.241.75-.146 1.119.099.363.33.691.675.896h.002c.346.203.737.239 1.101.144zm-6.405-7.342a2.083 2.083 0 0 0-1.485-.627c-.58 0-1.103.242-1.482.627-.378.385-.612.916-.612 1.507s.233 1.124.612 1.514a2.08 2.08 0 0 0 2.967 0c.379-.39.612-.923.612-1.514s-.233-1.122-.612-1.507zm-.835-2.51c.843.141 1.6.552 2.178 1.144h.004c.092.093.182.196.265.299l1.446-.851a3.176 3.176 0 0 1-.047-1.808 3.149 3.149 0 0 1 1.456-1.926l.025-.016a3.062 3.062 0 0 1 2.345-.306c.77.21 1.465.721 1.898 1.482v.002c.431.757.518 1.626.313 2.408a3.145 3.145 0 0 1-1.456 1.928l-.198.118h-.02a3.095 3.095 0 0 1-2.154.201 3.127 3.127 0 0 1-1.514-.944l-1.444.848a4.162 4.162 0 0 1 0 2.879l1.444.846c.413-.47.939-.789 1.514-.944a3.041 3.041 0 0 1 2.371.319l.048.023v.002a3.17 3.17 0 0 1 1.408 1.906 3.215 3.215 0 0 1-.313 2.405l-.026.053-.003-.005a3.147 3.147 0 0 1-1.867 1.436 3.096 3.096 0 0 1-2.371-.318v-.006a3.156 3.156 0 0 1-1.456-1.927 3.175 3.175 0 0 1 .047-1.805l-1.446-.848a3.905 3.905 0 0 1-.265.294l-.004.005a3.938 3.938 0 0 1-2.178 1.138v1.699a3.09 3.09 0 0 1 1.56.862l.002.004c.565.572.914 1.368.914 2.243 0 .873-.35 1.664-.914 2.239l-.002.009a3.1 3.1 0 0 1-2.21.931 3.1 3.1 0 0 1-2.206-.93h-.002v-.009a3.186 3.186 0 0 1-.916-2.239c0-.875.35-1.672.916-2.243v-.004h.002a3.1 3.1 0 0 1 1.558-.862v-1.699a3.926 3.926 0 0 1-2.176-1.138l-.006-.005a4.098 4.098 0 0 1-1.173-2.874c0-1.122.452-2.136 1.173-2.872h.006a3.947 3.947 0 0 1 2.176-1.144V6.289a3.137 3.137 0 0 1-1.558-.864h-.002v-.004a3.192 3.192 0 0 1-.916-2.243c0-.871.35-1.669.916-2.243l.002-.002A3.084 3.084 0 0 1 8.683 0c.861 0 1.641.355 2.21.932v.002h.002c.565.574.914 1.372.914 2.243 0 .876-.35 1.667-.914 2.243l-.002.005a3.142 3.142 0 0 1-1.56.864v1.692zm8.121-1.129l-.012-.019a1.452 1.452 0 0 0-.87-.668 1.43 1.43 0 0 0-1.103.146h.002c-.347.2-.58.529-.677.896-.095.365-.054.768.146 1.119l.007.009c.2.347.519.579.874.673.357.103.755.059 1.098-.144l.019-.009a1.47 1.47 0 0 0 .657-.885 1.493 1.493 0 0 0-.141-1.118", "c": "#231F20" },
    { "id": "vscode", "name": "VS Code", "tier": 3, "d": "M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z", "c": "#007ACC" },
    { "id": "visualstudio", "name": "Visual Studio", "tier": 3, "d": "M17.583.063a1.5 1.5 0 00-1.032.392 1.5 1.5 0 00-.001 0A.88.88 0 0016.5.5L8.528 9.316 3.875 5.5l-.407-.35a1 1 0 00-1.024-.154 1 1 0 00-.012.005l-1.817.75a1 1 0 00-.077.036 1 1 0 00-.047.028 1 1 0 00-.038.022 1 1 0 00-.048.034 1 1 0 00-.03.024 1 1 0 00-.044.036 1 1 0 00-.036.033 1 1 0 00-.032.035 1 1 0 00-.033.038 1 1 0 00-.035.044 1 1 0 00-.024.034 1 1 0 00-.032.05 1 1 0 00-.02.035 1 1 0 00-.024.05 1 1 0 00-.02.045 1 1 0 00-.016.044 1 1 0 00-.016.047 1 1 0 00-.015.055 1 1 0 00-.01.04 1 1 0 00-.008.054 1 1 0 00-.006.05A1 1 0 000 6.668v10.666a1 1 0 00.615.917l1.817.764a1 1 0 001.035-.164l.408-.35 4.653-3.815 7.973 8.815a1.5 1.5 0 00.072.065 1.5 1.5 0 00.057.05 1.5 1.5 0 00.058.042 1.5 1.5 0 00.063.044 1.5 1.5 0 00.065.038 1.5 1.5 0 00.065.036 1.5 1.5 0 00.068.031 1.5 1.5 0 00.07.03 1.5 1.5 0 00.073.025 1.5 1.5 0 00.066.02 1.5 1.5 0 00.08.02 1.5 1.5 0 00.068.014 1.5 1.5 0 00.075.01 1.5 1.5 0 00.075.008 1.5 1.5 0 00.073.003 1.5 1.5 0 00.077 0 1.5 1.5 0 00.078-.005 1.5 1.5 0 00.067-.007 1.5 1.5 0 00.087-.015 1.5 1.5 0 00.06-.012 1.5 1.5 0 00.08-.022 1.5 1.5 0 00.068-.02 1.5 1.5 0 00.07-.028 1.5 1.5 0 00.09-.037l4.944-2.377a1.5 1.5 0 00.476-.362 1.5 1.5 0 00.09-.112 1.5 1.5 0 00.004-.007 1.5 1.5 0 00.08-.125 1.5 1.5 0 00.062-.12 1.5 1.5 0 00.009-.017 1.5 1.5 0 00.04-.108 1.5 1.5 0 00.015-.037 1.5 1.5 0 00.03-.107 1.5 1.5 0 00.009-.037 1.5 1.5 0 00.017-.1 1.5 1.5 0 00.008-.05 1.5 1.5 0 00.006-.09 1.5 1.5 0 00.004-.08V3.942a1.5 1.5 0 000-.003 1.5 1.5 0 000-.032 1.5 1.5 0 00-.01-.15 1.5 1.5 0 00-.84-1.17L18.206.21a1.5 1.5 0 00-.622-.146zM18 6.92v10.163l-6.198-5.08zM3 8.574l3.099 3.427-3.1 3.426z", "c": "#5C2D91" },
    { "id": "intellijidea", "name": "IntelliJ IDEA", "tier": 3, "d": "M0 0v24h24V0zm3.723 3.111h5v1.834h-1.39v6.277h1.39v1.834h-5v-1.834h1.444V4.945H3.723zm11.055 0H17v6.5c0 .612-.055 1.111-.222 1.556-.167.444-.39.777-.723 1.11-.277.279-.666.557-1.11.668a3.933 3.933 0 0 1-1.445.278c-.778 0-1.444-.167-1.944-.445a4.81 4.81 0 0 1-1.279-1.056l1.39-1.555c.277.334.555.555.833.722.277.167.611.278.945.278.389 0 .721-.111 1-.389.221-.278.333-.667.333-1.278zM2.222 19.5h9V21h-9z", "c": "#000000" },
    { "id": "zed", "name": "Zed", "tier": 3, "d": "M2.25 1.5a.75.75 0 0 0-.75.75v16.5H0V2.25A2.25 2.25 0 0 1 2.25 0h20.095c1.002 0 1.504 1.212.795 1.92L10.764 14.298h3.486V12.75h1.5v1.922a1.125 1.125 0 0 1-1.125 1.125H9.264l-2.578 2.578h11.689V9h1.5v9.375a1.5 1.5 0 0 1-1.5 1.5H5.185L2.562 22.5H21.75a.75.75 0 0 0 .75-.75V5.25H24v16.5A2.25 2.25 0 0 1 21.75 24H1.655C.653 24 .151 22.788.86 22.08L13.19 9.75H9.75v1.5h-1.5V9.375A1.125 1.125 0 0 1 9.375 8.25h5.314l2.625-2.625H5.625V15h-1.5V5.625a1.5 1.5 0 0 1 1.5-1.5h13.19L21.438 1.5z", "c": "#084CCF" },
    { "id": "cursor", "name": "Cursor", "tier": 3, "d": "M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23", "c": "#000000" },
    { "id": "antigravity", "name": "Antigravity", "tier": 3, "d": "M19.94 20.59c1.09.82 2.73.27 1.23-1.23C16.67 15 17.62 3 12.03 3S7.39 15 2.89 19.36c-1.64 1.64.14 2.05 1.23 1.23c4.23-2.86 3.95-7.91 7.91-7.91s3.68 5.05 7.91 7.91", "c": "#000000", "vb": "0 0 24 24" },
    { "id": "claudecode", "name": "Claude Code", "tier": 3, "d": "M21 10.5h3v3h-3v3h-1.5v3H18v-3h-1.5v3H15v-3H9v3H7.5v-3H6v3H4.5v-3H3v-3H0v-3h3v-6h18Zm-15 0h1.5v-3H6Zm10.5 0H18v-3h-1.5z", "c": "#D97757" },
    { "id": "codex", "name": "Codex", "tier": 3, "d": "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z", "c": "#412991" },
    { "id": "opencode", "name": "OpenCode", "tier": 3, "d": "M22 24H2V0h20zM17 4.8H7v14.4h10z", "c": "#000000" },
    { "id": "pi", "name": "Pi", "tier": 3, "d": "M0 0v24h6v-6h6v-6H6V6h6v6h6V0Zm18 12v12h6V12Z", "c": "#000000" }
  ],

  /* Local overrides for GitHub-sourced projects, keyed by repo name.
     The snapshot comes from repos tagged with site.github.topic; anything
     written here wins over the API values (name, type, year, desc, links,
     meta). Add a `mock` with the same shape as the projects above to give a
     specific repo a hand-built animated preview; without it the panel uses
     the generic, data-driven repo card.
     Example:
       "restudy": {
         "type": "Study tool",
         "role": "Author, maintainer",
         "stack": "React, TypeScript, Vite",
         "mock": { "type": "code", "url": "restudy.app", ... }
       }
  */
  "projectPreviews": {}
};
