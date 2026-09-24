/* ──────────────────────────────────────────────────────────────
   Single source of truth: window.DATA.
   Loaded as a plain script (not fetched) so the site also works
   from the filesystem (file://) with no server. Edit values here.
   ────────────────────────────────────────────────────────────── */
window.DATA = {
  "site": {
    "name": "Eren Macit",
    "role": "Software Developer",
    "meta": {
      "lang": "en",
      "title": "Eren Macit — Software Developer",
      "description": "Eren Macit is a software developer living in Istanbul. He loves trying new things; when it comes to aesthetics and details, however, he’s dangerously meticulous. An obsession with perfection? It’s like a bad superpower..",
      "themeColor": "#f3ebdd",
      "favicon": "assets/favicon.svg",
      "og": {
        "type": "website",
        "title": "Elian Moreau — Front-end Developer",
        "description": "Fast, accessible interfaces and the design systems behind them. Lisbon, working worldwide.",
        "image": "assets/og.jpg",
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
      "copy": "Copy",
      "copied": "Copied",
      "copyFallback": "Press ⌘/Ctrl + C",
      "soon": "Link coming soon",
      "grid": "Layout grid",
      "hintGrid": "G grid",
      "hintNav": "← → sections",
      "hintClose": "Esc close",
      "cols": "cols",
      "dailyDriver": "daily driver",
      "whenFits": "when it fits",
      "showTake": "Show my take",
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
        "index": "01 — Profile",
        "title": "Info",
        "teaser": "Front-end developer, shipping interfaces from Lisbon since 2016.",
        "label": "Open Info"
      },
      "detail": {
        "title": "Info",
        "symbol": ":)",
        "path": "~/profile",
        "layout": "info",
        "content": {
          "lead": "Front-end developer building fast, accessible interfaces — and the design systems behind them.",
          "copy": "Ten years on the part of the web people actually touch. I care about render performance, components that work with a keyboard and a screen reader, typed APIs other developers enjoy, and motion that stays off the main thread. Independent since 2023, working with product teams that want their front-end to feel as good as the Figma file.",
          "stats": [
            {
              "label": "Years shipping",
              "value": "10",
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
                  "v": "elian"
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
                  "v": "\"Front-end Developer\""
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
                  "v": "\"Lisbon, PT · UTC+0\""
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
                  "v": "\"2027-01-04\""
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
                "period": "2023 — now",
                "current": true,
                "role": "Independent Front-end Developer",
                "place": "Lisbon · remote",
                "desc": "Design systems, performance audits and product builds."
              },
              {
                "period": "2020 — 2023",
                "current": false,
                "role": "Senior Front-end Engineer",
                "place": "Halden, Copenhagen",
                "desc": "Led a platform team of six; 40+ apps onto one library, LCP 3.8s → 1.4s."
              },
              {
                "period": "2018 — 2020",
                "current": false,
                "role": "Front-end Developer",
                "place": "Sillage Studio, Paris",
                "desc": "Interactive campaigns and WebGL product configurators."
              },
              {
                "period": "2016 — 2018",
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
                  "meta": "2021 — now"
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
        "index": "02 — Selected Work",
        "title": "Projects",
        "teaser": "Products, systems and open-source tools, 2022 — 2025.",
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
        ]
      },
      "face": {
        "index": "03 — Stack",
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
          "legend": [
            {
              "tier": 1,
              "label": "Daily drivers — the inner ring"
            },
            {
              "tier": 2,
              "label": "When it fits — further out"
            }
          ],
          "hint": "Click or tap any tile for my take"
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
        "index": "04 — Contact",
        "title": "Contact",
        "teaser": "Taking on contract work from January 2027.",
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
            "address": "hello@elianmoreau.dev"
          },
          "clock": {
            "label": "Local time — Lisbon",
            "timezone": "Europe/Lisbon",
            "note": "UTC+0 · overlaps with Europe all day, US East until 18:00."
          },
          "socials": {
            "label": "Elsewhere",
            "items": [
              {
                "name": "GitHub",
                "handle": "@elianmoreau",
                "href": "#"
              },
              {
                "name": "LinkedIn",
                "handle": "/in/elianmoreau",
                "href": "#"
              },
              {
                "name": "CodePen",
                "handle": "@elianmoreau",
                "href": "#"
              },
              {
                "name": "Bluesky",
                "handle": "@elian.dev",
                "href": "#"
              },
              {
                "name": "Résumé",
                "handle": "PDF · 2 pages",
                "href": "#",
                "arrow": "↓"
              }
            ]
          },
          "availability": {
            "label": "Availability",
            "before": "Open to contract work from",
            "date": "January 2027",
            "after": "design systems, performance audits, or building the product alongside your team.",
            "terms": [
              {
                "label": "Engagement",
                "value": "6 — 16 weeks"
              },
              {
                "label": "Commitment",
                "value": "3 — 5 days / week"
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
    {
      "id": "typescript",
      "name": "TypeScript",
      "tier": 1,
      "since": 2018,
      "used": "Every project",
      "take": "Strict mode, always. I treat types as the first draft of the docs — if the type is awkward, the API usually is too.",
      "d": "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z",
      "c": "#3178C6"
    },
    {
      "id": "react",
      "name": "React",
      "tier": 1,
      "since": 2017,
      "used": "Ledger UI, Pulse",
      "take": "Where most of my product work lives. Server components changed how I split work between server and client; I keep client state small on purpose.",
      "d": "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z",
      "c": "#61DAFB"
    },
    {
      "id": "nextdotjs",
      "name": "Next.js",
      "tier": 1,
      "since": 2019,
      "used": "Vessel & Kiln",
      "take": "Streaming SSR and edge caching took Vessel & Kiln from 4.1s to 0.9s LCP. I reach for it when content and commerce meet.",
      "d": "M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z",
      "c": "#000000"
    },
    {
      "id": "css3",
      "name": "CSS",
      "tier": 1,
      "since": 2014,
      "used": "Every project",
      "take": "My favourite language, honestly. Container queries, subgrid and cascade layers mean I write far less JavaScript than I used to.",
      "d": "M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z",
      "c": "#1572B6"
    },
    {
      "id": "html5",
      "name": "HTML",
      "tier": 1,
      "since": 2014,
      "used": "Every project",
      "take": "Semantics first. The right element gives you keyboard support and screen-reader behaviour for free — most a11y bugs start here.",
      "d": "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z",
      "c": "#E34F26"
    },
    {
      "id": "figma",
      "name": "Figma",
      "tier": 1,
      "since": 2016,
      "used": "Ledger UI",
      "take": "I design in it and wire its variables straight into design tokens, so Figma and code never drift apart.",
      "d": "M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z",
      "c": "#F24E1E"
    },
    {
      "id": "vite",
      "name": "Vite",
      "tier": 1,
      "since": 2021,
      "used": "motion-kit, Tidewater",
      "take": "Instant feedback loops. The dev server starting before I finish typing is a real productivity feature.",
      "d": "M13.056 23.238a.57.57 0 0 1-1.02-.355v-5.202c0-.63-.512-1.143-1.144-1.143H5.148a.57.57 0 0 1-.464-.903l3.777-5.29c.54-.753 0-1.804-.93-1.804H.57a.574.574 0 0 1-.543-.746.6.6 0 0 1 .08-.157L5.008.78a.57.57 0 0 1 .467-.24h14.589a.57.57 0 0 1 .466.903l-3.778 5.29c-.54.755 0 1.806.93 1.806h5.745c.238 0 .424.138.513.322a.56.56 0 0 1-.063.603z",
      "c": "#646CFF"
    },
    {
      "id": "playwright",
      "name": "Playwright",
      "tier": 1,
      "since": 2021,
      "used": "Ledger UI",
      "take": "End-to-end and visual regression tests. Motion-heavy UIs break silently — screenshots in CI catch it.",
      "d": "M23.996 7.462c-.056.837-.257 2.135-.716 3.85-.995 3.715-4.27 10.874-10.42 9.227-6.15-1.65-5.407-9.487-4.412-13.201.46-1.716.934-2.94 1.305-3.694.42-.853.846-.289 1.815.523.684.573 2.41 1.791 5.011 2.488 2.601.697 4.706.506 5.583.352 1.245-.219 1.897-.494 1.834.455Zm-9.807 3.863s-.127-1.819-1.773-2.286c-1.644-.467-2.613 1.04-2.613 1.04Zm4.058 4.539-7.769-2.172s.446 2.306 3.338 3.153c2.862.836 4.43-.98 4.43-.981Zm2.701-2.51s-.13-1.818-1.773-2.286c-1.644-.469-2.612 1.038-2.612 1.038ZM8.57 18.23c-4.749 1.279-7.261-4.224-8.021-7.08C.197 9.831.044 8.832.003 8.188c-.047-.73.455-.52 1.415-.354.677.118 2.3.261 4.308-.28a11.28 11.28 0 0 0 2.41-.956c-.058.197-.114.4-.17.61-.433 1.618-.827 4.055-.632 6.426-1.976.732-2.267 2.423-2.267 2.423l2.524-.715c.227 1.002.6 1.987 1.15 2.838a5.914 5.914 0 0 1-.171.049Zm-4.188-6.298c1.265-.333 1.363-1.631 1.363-1.631l-3.374.888s.745 1.076 2.01.743Z",
      "c": "#2EAD33"
    },
    {
      "id": "javascript",
      "name": "JavaScript",
      "tier": 2,
      "since": 2014,
      "used": "Everywhere, under TS",
      "take": "Browser APIs before dependencies. A surprising amount of UI needs nothing more than the platform.",
      "d": "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
    },
    {
      "id": "svelte",
      "name": "Svelte",
      "tier": 2,
      "since": 2020,
      "used": "Ferro specimen",
      "take": "For small, fast sites where runtime weight matters. The compiler approach still feels like cheating.",
      "d": "M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.168Z"
    },
    {
      "id": "astro",
      "name": "Astro",
      "tier": 2,
      "since": 2022,
      "used": "Tidewater",
      "take": "Content-heavy sites with islands only where interaction earns it. Ships almost no JS by default.",
      "d": "M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944.856 1.026 2.043 1.352 3.272 1.535 1.897.283 3.76.177 5.522-.678.202-.098.388-.229.608-.36.166.473.209.95.151 1.437-.14 1.185-.738 2.1-1.688 2.794-.38.277-.782.525-1.175.787-1.205.804-1.531 1.747-1.078 3.119l.044.148a3.158 3.158 0 0 1-1.407-1.188 3.31 3.31 0 0 1-.544-1.815c-.004-.32-.004-.642-.048-.958-.106-.769-.472-1.113-1.161-1.133-.707-.02-1.267.411-1.415 1.09-.012.053-.028.104-.045.165h.002zm-5.961-4.445s3.24-1.575 6.49-1.575l2.451-7.565c.092-.366.36-.614.662-.614.302 0 .57.248.662.614l2.45 7.565c3.85 0 6.491 1.575 6.491 1.575L16.088.727C15.93.285 15.663 0 15.303 0H8.697c-.36 0-.615.285-.784.727l-5.516 14.99z"
    },
    {
      "id": "vuedotjs",
      "name": "Vue",
      "tier": 2,
      "since": 2019,
      "used": "Client codebases",
      "take": "Not my default, but I am comfortable joining existing Vue and Nuxt teams and shipping from week one.",
      "d": "M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"
    },
    {
      "id": "tailwindcss",
      "name": "Tailwind",
      "tier": 2,
      "since": 2020,
      "used": "Team preference",
      "take": "When the team loves it, I use it well. For design systems I prefer typed styles with tokens underneath.",
      "d": "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
    },
    {
      "id": "radixui",
      "name": "Radix",
      "tier": 2,
      "since": 2021,
      "used": "Ledger UI",
      "take": "Accessible primitives that do the hard parts — focus, dismissal, ARIA — so the design system can own the look.",
      "d": "M11.52 24a7.68 7.68 0 0 1-7.68-7.68 7.68 7.68 0 0 1 7.68-7.68V24Zm0-24v7.68H3.84V0h7.68Zm4.8 7.68a3.84 3.84 0 1 1 0-7.68 3.84 3.84 0 0 1 0 7.68Z"
    },
    {
      "id": "storybook",
      "name": "Storybook",
      "tier": 2,
      "since": 2019,
      "used": "Ledger UI",
      "take": "Every component documented next to its states. It is also where designers review work before it ships.",
      "d": "M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 011.279 1.2v21.596a1.2 1.2 0 01-1.26 1.2l-16.096-.72a1.2 1.2 0 01-1.15-1.16l-.75-19.797a1.2 1.2 0 011.13-1.27L16.7.222zM13.64 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.859-4.89-3.15 0-4.899 1.72-4.899 4.29 0 4.45 5.999 4.53 5.999 6.959 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.649-.48-3.769 0-.27 4.03 2.23 5.2 5.099 5.2 2.79 0 4.969-1.49 4.969-4.18 0-4.77-6.099-4.64-6.099-6.999 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z"
    },
    {
      "id": "gsap",
      "name": "GSAP",
      "tier": 2,
      "since": 2017,
      "used": "Campaign work",
      "take": "For choreographed, timeline-heavy sequences. For UI state changes I prefer the Web Animations API.",
      "d": "M9.83,7.59C10.647,7.595 11.267,7.828 11.672,8.282C12.055,8.713 12.239,9.336 12.219,10.132L12.205,10.193C12.197,10.211 12.185,10.229 12.17,10.243C12.14,10.272 12.099,10.288 12.057,10.288L10.398,10.288C10.29,10.288 10.199,10.2 10.199,10.093C10.199,9.669 10.071,9.435 9.809,9.383L9.689,9.372C9.347,9.372 9.125,9.583 9.119,9.951C9.112,10.361 9.344,10.734 10.004,11.374C10.872,12.19 11.221,12.913 11.204,13.867C11.177,15.411 10.127,16.41 8.531,16.41C7.716,16.41 7.093,16.191 6.678,15.761C6.258,15.324 6.066,14.683 6.106,13.855C6.108,13.813 6.125,13.772 6.155,13.743C6.185,13.714 6.226,13.698 6.267,13.698L7.983,13.698C8.007,13.699 8.03,13.705 8.052,13.715C8.073,13.726 8.092,13.741 8.107,13.76C8.12,13.775 8.129,13.793 8.135,13.813C8.14,13.832 8.141,13.853 8.137,13.873C8.118,14.171 8.171,14.394 8.288,14.518C8.363,14.598 8.469,14.639 8.599,14.639C8.916,14.639 9.102,14.414 9.109,14.024C9.115,13.687 9.007,13.39 8.427,12.792C7.676,12.058 7.003,11.3 7.024,10.108C7.037,9.416 7.311,8.784 7.798,8.327C8.312,7.845 9.014,7.59 9.83,7.59ZM4.047,7.618C4.794,7.612 5.381,7.842 5.789,8.303C6.221,8.79 6.44,9.524 6.441,10.485C6.44,10.527 6.422,10.567 6.392,10.597C6.362,10.626 6.322,10.643 6.28,10.643L4.479,10.643C4.448,10.642 4.417,10.629 4.395,10.607C4.373,10.584 4.361,10.553 4.36,10.522C4.346,9.899 4.172,9.576 3.828,9.538L3.757,9.534C3.067,9.535 2.66,10.472 2.444,10.992C2.142,11.719 1.988,12.507 2.018,13.293C2.033,13.659 2.092,14.173 2.438,14.386C2.746,14.575 3.185,14.45 3.451,14.24C3.716,14.031 3.93,13.669 4.02,13.339C4.033,13.293 4.033,13.258 4.021,13.241C4.015,13.233 4.003,13.229 3.989,13.226L3.485,13.222C3.461,13.222 3.436,13.216 3.414,13.206C3.392,13.196 3.372,13.181 3.356,13.162C3.344,13.148 3.335,13.13 3.331,13.112C3.327,13.093 3.327,13.074 3.331,13.056L3.647,11.682C3.663,11.611 3.726,11.558 3.804,11.548L3.804,11.545L6.839,11.545C6.846,11.545 6.854,11.545 6.86,11.546C6.939,11.556 6.995,11.63 6.994,11.71L6.994,11.714L6.678,13.085C6.661,13.163 6.583,13.22 6.494,13.22L6.113,13.22C6.1,13.22 6.086,13.225 6.075,13.233C6.064,13.241 6.056,13.253 6.052,13.266C5.7,14.46 5.223,15.282 4.594,15.775C4.058,16.195 3.399,16.391 2.517,16.391C1.725,16.391 1.191,16.136 0.738,15.633C0.14,14.967 -0.107,13.879 0.043,12.566C0.313,10.103 1.589,7.618 4.047,7.618ZM21.016,7.75C23.026,7.75 24.03,8.662 23.999,10.461C23.962,12.569 22.678,14.119 20.745,14.477C20.47,14.527 20.191,14.547 19.912,14.545L18.978,14.541C18.963,14.541 18.948,14.547 18.937,14.558C18.926,14.568 18.92,14.583 18.92,14.598C18.92,14.608 18.922,14.618 18.928,14.627C18.933,14.636 18.941,14.643 18.95,14.648L19.744,15.062C19.809,15.096 19.835,15.153 19.82,15.226C19.815,15.249 19.618,16.139 19.613,16.159C19.596,16.237 19.533,16.282 19.442,16.282L17.739,16.282C17.715,16.282 17.69,16.277 17.668,16.267C17.646,16.257 17.626,16.241 17.61,16.223C17.598,16.208 17.589,16.191 17.585,16.173C17.58,16.155 17.581,16.135 17.585,16.116L19.481,7.875C19.5,7.789 19.581,7.751 19.653,7.751L21.016,7.75ZM17.273,7.762C17.292,7.77 17.31,7.781 17.324,7.795C17.338,7.81 17.351,7.828 17.358,7.847C17.366,7.866 17.369,7.886 17.369,7.906L17.358,16.119C17.361,16.138 17.36,16.158 17.355,16.177C17.35,16.196 17.34,16.213 17.328,16.228C17.313,16.245 17.295,16.259 17.274,16.268C17.254,16.277 17.232,16.282 17.21,16.281L15.397,16.281C15.377,16.282 15.356,16.277 15.337,16.27C15.318,16.262 15.3,16.25 15.286,16.236C15.272,16.221 15.26,16.204 15.253,16.185C15.245,16.166 15.241,16.146 15.241,16.125L15.28,15.328C15.282,15.241 15.28,15.217 15.229,15.211L15.161,15.209L13.447,15.209C13.323,15.209 13.314,15.22 13.27,15.334L12.914,16.191C12.882,16.252 12.818,16.281 12.722,16.281L10.927,16.281C10.818,16.281 10.74,16.173 10.781,16.072L14.499,7.873C14.524,7.824 14.562,7.75 14.648,7.75L17.214,7.75C17.234,7.75 17.254,7.754 17.273,7.762ZM15.5,9.985C15.492,9.953 15.466,9.956 15.445,9.998C15.43,10.028 15.416,10.06 15.405,10.091L14.121,13.274C14.114,13.294 14.109,13.31 14.105,13.322C14.104,13.328 14.103,13.335 14.104,13.341C14.105,13.347 14.108,13.353 14.111,13.358C14.115,13.363 14.12,13.367 14.126,13.37C14.131,13.373 14.137,13.376 14.143,13.376L15.215,13.39C15.334,13.38 15.34,13.374 15.352,13.253C15.354,13.21 15.506,10.022 15.5,9.985ZM20.112,9.582C20.097,9.582 20.083,9.588 20.072,9.599C20.061,9.609 20.055,9.624 20.054,9.639C20.054,9.649 20.057,9.659 20.062,9.668C20.068,9.677 20.075,9.685 20.084,9.69C20.097,9.697 20.869,10.104 20.926,10.135C20.968,10.158 20.969,10.198 20.955,10.267C20.948,10.298 20.415,12.642 20.416,12.644C20.419,12.647 20.435,12.655 20.515,12.655L20.551,12.655C21.446,12.619 21.934,11.561 21.952,10.534C21.961,9.979 21.772,9.638 21.429,9.588L21.358,9.582L20.112,9.582Z"
    },
    {
      "id": "threedotjs",
      "name": "Three.js",
      "tier": 2,
      "since": 2018,
      "used": "Tidewater",
      "take": "Real-time 3D when it tells the story better than a flat UI. Instancing is how Tidewater stays at 60 fps.",
      "d": "M.38 0a.268.268 0 0 0-.256.332l2.894 11.716a.268.268 0 0 0 .01.04l2.89 11.708a.268.268 0 0 0 .447.128L23.802 7.15a.268.268 0 0 0-.112-.45l-5.784-1.667a.268.268 0 0 0-.123-.035L6.38 1.715a.268.268 0 0 0-.144-.04L.456.01A.268.268 0 0 0 .38 0zm.374.654L5.71 2.08 1.99 5.664zM6.61 2.34l4.864 1.4-3.65 3.515zm-.522.12l1.217 4.926-4.877-1.4zm6.28 1.538l4.878 1.404-3.662 3.53zm-.52.13l1.208 4.9-4.853-1.392zm6.3 1.534l4.947 1.424-3.715 3.574zm-.524.12l1.215 4.926-4.876-1.398zm-15.432.696l4.964 1.424-3.726 3.586zM8.047 8.15l4.877 1.4-3.66 3.527zm-.518.137l1.236 5.017-4.963-1.432zm6.274 1.535l4.965 1.425-3.73 3.586zm-.52.127l1.235 5.012-4.958-1.43zm-9.63 2.438l4.873 1.406-3.656 3.523zm5.854 1.687l4.863 1.403-3.648 3.51zm-.54.04l1.214 4.927-4.875-1.4zm-3.896 4.02l5.037 1.442-3.782 3.638z"
    },
    {
      "id": "webgl",
      "name": "WebGL / GLSL",
      "tier": 2,
      "since": 2018,
      "used": "Tidewater",
      "take": "Custom shaders for fields, noise and displacement. Everything on the GPU that can be.",
      "d": "M3.489 10.164c-.565.548-.885 1.172-.885 1.835 0 2.167 3.415 3.921 7.631 3.921 2.339 0 4.437-.484 5.837-1.335-1.533 1.426-4.265 2.43-7.385 2.43C3.89 17.015 0 14.769 0 11.999s3.89-5.014 8.689-5.014c3.131.002 5.872 1.009 7.398 2.444-1.399-.856-3.504-1.351-5.852-1.351-2.506 0-4.73.621-6.121 1.579l.785 3.395.971-3.481h.737l.971 3.481.805-3.481h.805L7.953 14.11h-.717l-.991-3.566L5.24 14.11h-.714zm19.839 3.48h-.162v.424h-.142v-.424h-.164v-.122h.468zm.064-.122h.209l.095.364.096-.364H24v.546h-.133v-.415h-.002l-.113.415h-.109l-.115-.415h-.003v.415h-.133zm-5.699.515c-.2.084-.399.126-.601.126-.319 0-.608-.055-.863-.166q-.3825-.1665-.645-.459c-.175-.195-.311-.424-.404-.688-.093-.263-.14-.547-.14-.851 0-.313.047-.601.14-.869.093-.269.226-.502.402-.699.175-.2.39-.355.645-.468s.541-.171.863-.171c.215 0 .421.034.621.098.199.064.381.16.543.284s.295.279.399.463.169.395.193.632h-.874c-.055-.233-.159-.408-.315-.525-.155-.118-.343-.176-.567-.176-.207 0-.382.04-.526.12s-.262.187-.35.322a1.41 1.41 0 0 0-.196.459c-.039.171-.062.348-.062.532 0 .175.02.346.062.512.04.167.107.315.196.448.088.133.206.24.35.32s.319.119.526.119c.303 0 .539-.077.705-.23s.262-.375.29-.668h-.922v-.689h1.75v2.255h-.584l-.093-.472c-.162.21-.344.357-.543.441m2.708-4.14v3.395h2.033v.774h-2.949V9.897zm-9.204 1.585c.109.151.191.337.251.557.053.21.08.452.08.716v.047H9.372c.011.41.164.876.807.876.45 0 .703-.344.719-.537l.002-.042h.592l-.007.051c-.008.075-.051.222-.135.377-.049.086-.104.166-.166.239a1.3 1.3 0 0 1-.248.218c-.071.046-.158.1-.287.139-.148.047-.326.069-.543.069-.415 0-.763-.151-1.007-.434a1.43 1.43 0 0 1-.266-.482c-.06-.182-.091-.386-.091-.601 0-.485.12-.896.348-1.186.125-.158.278-.28.457-.362.191-.086.41-.131.654-.131.218 0 .413.043.581.127.165.082.304.202.415.359m-1.064.047c-.402 0-.741.357-.765.785h1.543c-.046-.528-.302-.785-.778-.785m4.373.388c.058.182.086.381.084.588 0 .19-.022.385-.064.563-.049.206-.122.39-.22.545-.11.178-.252.318-.419.415-.186.109-.408.164-.654.164-.228 0-.426-.057-.585-.173a.89.89 0 0 1-.198-.193v.282h-.561V9.983h.59v1.393c.093-.111.202-.2.324-.262.146-.078.313-.118.497-.12.199 0 .383.04.547.118.158.075.295.184.408.324.109.135.193.297.251.481m-.53.67c0-.2-.013-.459-.111-.672-.12-.26-.335-.384-.654-.384-.3 0-.506.135-.628.417-.084.195-.126.452-.126.785 0 .696.412.942.765.942.244 0 .435-.102.565-.303.125-.191.189-.462.189-.785"
    },
    {
      "id": "d3",
      "name": "D3",
      "tier": 2,
      "since": 2017,
      "used": "Pulse",
      "take": "Scales and layouts, not DOM. I let D3 do the maths and draw on canvas for anything that streams.",
      "d": "M13.312 12C13.312 5.718 8.22.625 1.937.625H0v5h1.938c3.521 0 6.375 2.854 6.375 6.375s-2.854 6.375-6.375 6.375H0v5h1.938c6.281 0 11.374-5.093 11.374-11.375zM24 7.563C24 3.731 20.893.625 17.062.625h-8a13.4154 13.4154 0 0 1 4.686 5h3.314c1.069 0 1.938.868 1.938 1.938 0 1.07-.869 1.938-1.938 1.938h-1.938c.313 1.652.313 3.348 0 5h1.938c1.068 0 1.938.867 1.938 1.938s-.869 1.938-1.938 1.938h-3.314a13.4154 13.4154 0 0 1-4.686 5h8c1.621 0 3.191-.568 4.438-1.605 2.943-2.45 3.346-6.824.895-9.77A6.9459 6.9459 0 0 0 24 7.563z"
    },
    {
      "id": "webassembly",
      "name": "WebAssembly",
      "tier": 2,
      "since": 2023,
      "used": "Pulse",
      "take": "Signal decoding in Rust compiled to WASM, running in a worker — the main thread never notices.",
      "d": "M14.745,0c0,0.042,0,0.085,0,0.129c0,1.52-1.232,2.752-2.752,2.752c-1.52,0-2.752-1.232-2.752-2.752 c0-0.045,0-0.087,0-0.129H0v24h24V0H14.745z M11.454,21.431l-1.169-5.783h-0.02l-1.264,5.783H7.39l-1.824-8.497h1.59l1.088,5.783 h0.02l1.311-5.783h1.487l1.177,5.854h0.02l1.242-5.854h1.561l-2.027,8.497H11.454z M20.209,21.431l-0.542-1.891h-2.861l-0.417,1.891 h-1.59l2.056-8.497h2.509l2.5,8.497H20.209z M17.812,15.028l-0.694,3.118h2.159l-0.796-3.118H17.812z"
    },
    {
      "id": "rust",
      "name": "Rust",
      "tier": 2,
      "since": 2023,
      "used": "Pulse",
      "take": "Only for the hot paths. Learning it made my TypeScript more careful about ownership and data flow.",
      "d": "M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.578l-1.1066-.414a8.4958 8.4958 0 00-.087-.2856l.6904-.9587a.3462.3462 0 00-.2257-.5446l-1.1663-.1894a9.3574 9.3574 0 00-.1407-.2622l.49-1.0761a.3437.3437 0 00-.0274-.3361.3486.3486 0 00-.3006-.154l-1.1845.0416a6.7444 6.7444 0 00-.1873-.2268l.2723-1.153a.3472.3472 0 00-.417-.4172l-1.1532.2724a14.0183 14.0183 0 00-.2278-.1873l.0415-1.1845a.3442.3442 0 00-.49-.328l-1.076.491c-.0872-.0476-.1742-.0952-.2623-.1407l-.1903-1.1673A.3483.3483 0 0016.256.955l-.9597.6905a8.4867 8.4867 0 00-.2855-.086l-.414-1.1066a.3483.3483 0 00-.5781-.1154l-.8069.8666a9.2936 9.2936 0 00-.2936-.0284L12.2946.1683a.3462.3462 0 00-.5892 0l-.6236 1.0073a13.7383 13.7383 0 00-.2936.0284L9.9803.3374a.3462.3462 0 00-.578.1154l-.4141 1.1065c-.0962.0274-.1903.0567-.2855.086L7.744.955a.3483.3483 0 00-.5447.2258L7.009 2.348a9.3574 9.3574 0 00-.2622.1407l-1.0762-.491a.3462.3462 0 00-.49.328l.0416 1.1845a7.9826 7.9826 0 00-.2278.1873L3.8413 3.425a.3472.3472 0 00-.4171.4171l.2713 1.1531c-.0628.075-.1255.1509-.1863.2268l-1.1845-.0415a.3462.3462 0 00-.328.49l.491 1.0761a9.167 9.167 0 00-.1407.2622l-1.1662.1894a.3483.3483 0 00-.2258.5446l.6904.9587a13.303 13.303 0 00-.087.2855l-1.1065.414a.3483.3483 0 00-.1155.5781l.8656.807a9.2936 9.2936 0 00-.0283.2935l-1.0073.6236a.3442.3442 0 000 .5892l1.0073.6236c.008.0982.0182.1964.0283.2936l-.8656.8079a.3462.3462 0 00.1155.578l1.1065.4141c.0273.0962.0567.1914.087.2855l-.6904.9587a.3452.3452 0 00.2268.5447l1.1662.1893c.0456.088.0922.1751.1408.2622l-.491 1.0762a.3462.3462 0 00.328.49l1.1834-.0415c.0618.0769.1235.1528.1873.2277l-.2713 1.1541a.3462.3462 0 00.4171.4161l1.153-.2713c.075.0638.151.1255.2279.1863l-.0415 1.1845a.3442.3442 0 00.49.327l1.0761-.49c.087.0486.1741.0951.2622.1407l.1903 1.1662a.3483.3483 0 00.5447.2268l.9587-.6904a9.299 9.299 0 00.2855.087l.414 1.1066a.3452.3452 0 00.5781.1154l.8079-.8656c.0972.0111.1954.0203.2936.0294l.6236 1.0073a.3472.3472 0 00.5892 0l.6236-1.0073c.0982-.0091.1964-.0183.2936-.0294l.8069.8656a.3483.3483 0 00.578-.1154l.4141-1.1066a8.4626 8.4626 0 00.2855-.087l.9587.6904a.3452.3452 0 00.5447-.2268l.1903-1.1662c.088-.0456.1751-.0931.2622-.1407l1.0762.49a.3472.3472 0 00.49-.327l-.0415-1.1845a6.7267 6.7267 0 00.2267-.1863l1.1531.2713a.3472.3472 0 00.4171-.416l-.2713-1.1542c.0628-.0749.1255-.1508.1863-.2278l1.1845.0415a.3442.3442 0 00.328-.49l-.49-1.076c.0475-.0872.0951-.1742.1407-.2623l1.1662-.1893a.3483.3483 0 00.2258-.5447l-.6904-.9587.087-.2855 1.1066-.414a.3462.3462 0 00.1154-.5781l-.8656-.8079c.0101-.0972.0202-.1954.0283-.2936l1.0073-.6236a.3442.3442 0 000-.5892zm-6.7413 8.3551a.7138.7138 0 01.2986-1.396.714.714 0 11-.2997 1.396zm-.3422-2.3142a.649.649 0 00-.7715.5l-.3573 1.6685c-1.1035.501-2.3285.7795-3.6193.7795a8.7368 8.7368 0 01-3.6951-.814l-.3574-1.6684a.648.648 0 00-.7714-.499l-1.473.3158a8.7216 8.7216 0 01-.7613-.898h7.1676c.081 0 .1356-.0141.1356-.088v-2.536c0-.074-.0536-.0881-.1356-.0881h-2.0966v-1.6077h2.2677c.2065 0 1.1065.0587 1.394 1.2088.0901.3533.2875 1.5044.4232 1.8729.1346.413.6833 1.2381 1.2685 1.2381h3.5716a.7492.7492 0 00.1296-.0131 8.7874 8.7874 0 01-.8119.9526zM6.8369 20.024a.714.714 0 11-.2997-1.396.714.714 0 01.2997 1.396zM4.1177 8.9972a.7137.7137 0 11-1.304.5791.7137.7137 0 011.304-.579zm-.8352 1.9813l1.5347-.6824a.65.65 0 00.33-.8585l-.3158-.7147h1.2432v5.6025H3.5669a8.7753 8.7753 0 01-.2834-3.348zm6.7343-.5437V8.7836h2.9601c.153 0 1.0792.1772 1.0792.8697 0 .575-.7107.7815-1.2948.7815zm10.7574 1.4862c0 .2187-.008.4363-.0243.651h-.9c-.09 0-.1265.0586-.1265.1477v.413c0 .973-.5487 1.1846-1.0296 1.2382-.4576.0517-.9648-.1913-1.0275-.4717-.2704-1.5186-.7198-1.8436-1.4305-2.4034.8817-.5599 1.799-1.386 1.799-2.4915 0-1.1936-.819-1.9458-1.3769-2.3153-.7825-.5163-1.6491-.6195-1.883-.6195H5.4682a8.7651 8.7651 0 014.907-2.7699l1.0974 1.151a.648.648 0 00.9182.0213l1.227-1.1743a8.7753 8.7753 0 016.0044 4.2762l-.8403 1.8982a.652.652 0 00.33.8585l1.6178.7188c.0283.2875.0425.577.0425.8717zm-9.3006-9.5993a.7128.7128 0 11.984 1.0316.7137.7137 0 01-.984-1.0316zm8.3389 6.71a.7107.7107 0 01.9395-.3625.7137.7137 0 11-.9405.3635z"
    },
    {
      "id": "nodedotjs",
      "name": "Node.js",
      "tier": 2,
      "since": 2016,
      "used": "Build tooling",
      "take": "APIs, image pipelines and the scripts that keep a project boring to release.",
      "d": "M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"
    },
    {
      "id": "githubactions",
      "name": "GitHub Actions",
      "tier": 2,
      "since": 2020,
      "used": "Every project",
      "take": "Preview deploys on every pull request, plus performance and a11y budgets that fail the build.",
      "d": "M10.984 13.836a.5.5 0 0 1-.353-.146l-.745-.743a.5.5 0 1 1 .706-.708l.392.391 1.181-1.18a.5.5 0 0 1 .708.707l-1.535 1.533a.504.504 0 0 1-.354.146zm9.353-.147l1.534-1.532a.5.5 0 0 0-.707-.707l-1.181 1.18-.392-.391a.5.5 0 1 0-.706.708l.746.743a.497.497 0 0 0 .706-.001zM4.527 7.452l2.557-1.585A1 1 0 0 0 7.09 4.17L4.533 2.56A1 1 0 0 0 3 3.406v3.196a1.001 1.001 0 0 0 1.527.85zm2.03-2.436L4 6.602V3.406l2.557 1.61zM24 12.5c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3h-2.08a3.503 3.503 0 0 1-3.46 3 3.502 3.502 0 0 1-3.46-3h-.558c-.972 0-1.85-.399-2.482-1.042V17c0 1.654 1.346 3 3 3h.04c.244-1.693 1.7-3 3.46-3 1.93 0 3.5 1.57 3.5 3.5S13.43 24 11.5 24a3.502 3.502 0 0 1-3.46-3H8c-2.206 0-4-1.794-4-4V9.899A5.008 5.008 0 0 1 0 5c0-2.757 2.243-5 5-5s5 2.243 5 5a5.005 5.005 0 0 1-4.952 4.998A2.482 2.482 0 0 0 7.482 12h.558c.244-1.693 1.7-3 3.46-3a3.502 3.502 0 0 1 3.46 3h2.08a3.503 3.503 0 0 1 3.46-3c1.93 0 3.5 1.57 3.5 3.5zm-15 8c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5S9 19.122 9 20.5zM5 9c2.206 0 4-1.794 4-4S7.206 1 5 1 1 2.794 1 5s1.794 4 4 4zm9 3.5c0-1.378-1.122-2.5-2.5-2.5S9 11.122 9 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm9 0c0-1.378-1.122-2.5-2.5-2.5S18 11.122 18 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm-13 8a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm12 0c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3.002c-.007.001-.013.005-.021.005l-.506.017h-.017a.5.5 0 0 1-.016-.999l.506-.017c.018-.002.035.006.052.007A3.503 3.503 0 0 1 20.5 17c1.93 0 3.5 1.57 3.5 3.5zm-1 0c0-1.378-1.122-2.5-2.5-2.5S18 19.122 18 20.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5z"
    },
    {
      "id": "lighthouse",
      "name": "Lighthouse CI",
      "tier": 2,
      "since": 2020,
      "used": "Vessel & Kiln",
      "take": "Performance is a feature with a budget. If a PR makes it slower, CI says so before users do.",
      "d": "M12 0l5.5 3.5v5H20v3h-2.25l2 12.5H4.25l2-12.5H4v-3h2.5V3.53zm2.94 13.25l-6.22 2.26L8 20.04l7.5-2.75zM12 3.56L9.5 5.17V8.5h5V5.15Z"
    },
    {
      "id": "sanity",
      "name": "Sanity",
      "tier": 2,
      "since": 2020,
      "used": "Tidewater",
      "take": "Structured content editors actually enjoy. I model the content first and let the front-end follow.",
      "d": "m23.327 15.205-.893-1.555-4.321 2.632 4.799-6.11.726-.426-.179-.27.33-.421-1.515-1.261-.693.883-13.992 8.186 5.173-6.221 9.636-5.282-.915-1.769-5.248 2.876 2.584-3.106-1.481-1.305-5.816 6.994-5.777 3.168 4.423-5.847 2.771-1.442-.88-1.789-8.075 4.203L6.186 4.43 4.648 3.198 0 9.349l.072.058.868 1.768 5.153-2.683-4.696 6.207.77.617.458.885 5.425-2.974-5.974 7.185 1.481 1.304.297-.358 14.411-8.459-4.785 6.094.078.065-.007.005.992 1.726 6.364-3.877-2.451 3.954 1.642 1.077L24 15.648z"
    },
    {
      "id": "blender",
      "name": "Blender",
      "tier": 2,
      "since": 2020,
      "used": "Product renders",
      "take": "Lighting studies and product renders that end up as textures or posters for WebGL scenes.",
      "d": "M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626"
    }
  ]
};
