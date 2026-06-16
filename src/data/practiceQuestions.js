const practiceQuestions = [
        {
          word: 'Rose',
          type: 'Declension', // declension or adjective
          group: '1st', // 1st declension
          genders: ['Feminine'], // some types of practice will have multiple genders (male/feminine)
          singleGender: true, // Whether this word has a single gender (across different practice options) (false for adjectives)
          fields: [
            { case: 'Nominative', number: 'Singular', answer: 'rosa' },
            { case: 'Genitive', number: 'Singular', answer: 'rosae' },
            { case: 'Dative', number: 'Singular', answer: 'rosae' },
            { case: 'Accusative', number: 'Singular', answer: 'rosam' },
            { case: 'Ablative', number: 'Singular', answer: 'rosā' },

            { case: 'Nominative', number: 'Plural', answer: 'rosae' },
            { case: 'Genitive', number: 'Plural', answer: 'rosārum' },
            { case: 'Dative', number: 'Plural', answer: 'rosīs' },
            { case: 'Accusative', number: 'Plural', answer: 'rosās' },
            { case: 'Ablative', number: 'Plural', answer: 'rosīs' }
          ]
        },
        {
          'word': 'Friend',
          'type': 'Declension',
          'group': '2nd',
          'genders': [
            'Masculine'
          ],
          'singleGender': true,
          'fields': [
            {
              'case': 'Nominative',
              'number': 'Singular',
              'answer': 'amīcus',
            },
            {
              'case': 'Genitive',
              'number': 'Singular',
              'answer': 'amīcī',
            },
            {
              'case': 'Dative',
              'number': 'Singular',
              'answer': 'amīcō',
            },
            {
              'case': 'Accusative',
              'number': 'Singular',
              'answer': 'amīcum',
            },
            {
              'case': 'Ablative',
              'number': 'Singular',
              'answer': 'amīcō',
            },
            {
              'case': 'Vocative',
              'number': 'Singular',
              'answer': 'amīce',
            },
            {
              'case': 'Nominative',
              'number': 'Plural',
              'answer': 'amīcī',
            },
            {
              'case': 'Genitive',
              'number': 'Plural',
              'answer': 'amīcōrum',
            },
            {
              'case': 'Dative',
              'number': 'Plural',
              'answer': 'amīcīs',
            },
            {
              'case': 'Accusative',
              'number': 'Plural',
              'answer': 'amīcōs',
            },
            {
              'case': 'Ablative',
              'number': 'Plural',
              'answer': 'amīcīs',
            }
          ]
        },
        {
          'word': 'Son',
          'type': 'Declension',
          'group': '2nd',
          'genders': [
            'Masculine'
          ],
          'singleGender': true,
          'fields': [
            {
              'case': 'Nominative',
              'number': 'Singular',
              'answer': 'fīlius',
            },
            {
              'case': 'Genitive',
              'number': 'Singular',
              'answer': 'fīliī',
            },
            {
              'case': 'Dative',
              'number': 'Singular',
              'answer': 'fīliō',
            },
            {
              'case': 'Accusative',
              'number': 'Singular',
              'answer': 'fīlium',
            },
            {
              'case': 'Ablative',
              'number': 'Singular',
              'answer': 'fīliō',
            },
            {
              'case': 'Vocative',
              'number': 'Singular',
              'answer': 'fīlī',
            },
            {
              'case': 'Nominative',
              'number': 'Plural',
              'answer': 'fīliī',
            },
            {
              'case': 'Genitive',
              'number': 'Plural',
              'answer': 'fīliōrum',
            },
            {
              'case': 'Dative',
              'number': 'Plural',
              'answer': 'fīliīs',
            },
            {
              'case': 'Accusative',
              'number': 'Plural',
              'answer': 'fīliōs',
            },
            {
              'case': 'Ablative',
              'number': 'Plural',
              'answer': 'fīliīs',
            }
          ]
        },
        {
          'word': 'Boy',
          'type': 'Declension',
          'group': '2nd',
          'genders': [
            'Masculine'
          ],
          'singleGender': true,
          'fields': [
            {
              'case': 'Nominative',
              'number': 'Singular',
              'answer': 'puer',
            },
            {
              'case': 'Genitive',
              'number': 'Singular',
              'answer': 'puerī',
            },
            {
              'case': 'Dative',
              'number': 'Singular',
              'answer': 'puerō',
            },
            {
              'case': 'Accusative',
              'number': 'Singular',
              'answer': 'puerum',
            },
            {
              'case': 'Ablative',
              'number': 'Singular',
              'answer': 'puerō',
            },
            {
              'case': 'Nominative',
              'number': 'Plural',
              'answer': 'puerī',
            },
            {
              'case': 'Genitive',
              'number': 'Plural',
              'answer': 'puerōrum',
            },
            {
              'case': 'Dative',
              'number': 'Plural',
              'answer': 'puerīs',
            },
            {
              'case': 'Accusative',
              'number': 'Plural',
              'answer': 'puerōs',
            },
            {
              'case': 'Ablative',
              'number': 'Plural',
              'answer': 'puerīs',
            }
          ]
        },
        {
          'word': 'Field',
          'type': 'Declension',
          'group': '2nd',
          'genders': [
            'Masculine'
          ],
          'singleGender': true,
          'fields': [
            {
              'case': 'Nominative',
              'number': 'Singular',
              'answer': 'ager',
            },
            {
              'case': 'Genitive',
              'number': 'Singular',
              'answer': 'agrī',
            },
            {
              'case': 'Dative',
              'number': 'Singular',
              'answer': 'agrō',
            },
            {
              'case': 'Accusative',
              'number': 'Singular',
              'answer': 'agrum',
            },
            {
              'case': 'Ablative',
              'number': 'Singular',
              'answer': 'agrō',
            },
            {
              'case': 'Nominative',
              'number': 'Plural',
              'answer': 'agrī',
            },
            {
              'case': 'Genitive',
              'number': 'Plural',
              'answer': 'agrōrum',
            },
            {
              'case': 'Dative',
              'number': 'Plural',
              'answer': 'agrīs',
            },
            {
              'case': 'Accusative',
              'number': 'Plural',
              'answer': 'agrōs',
            },
            {
              'case': 'Ablative',
              'number': 'Plural',
              'answer': 'agrīs',
            }
          ]
        },
        {
          'word': 'Gift',
          'type': 'Declension',
          'group': '2nd',
          'genders': [
            'Neuter'
          ],
          'singleGender': true,
          'fields': [
            {
              'case': 'Nominative',
              'number': 'Singular',
              'answer': 'dōnum',
            },
            {
              'case': 'Genitive',
              'number': 'Singular',
              'answer': 'dōnī',
            },
            {
              'case': 'Dative',
              'number': 'Singular',
              'answer': 'dōnō',
            },
            {
              'case': 'Accusative',
              'number': 'Singular',
              'answer': 'dōnum',
            },
            {
              'case': 'Ablative',
              'number': 'Singular',
              'answer': 'dōnō',
            },
            {
              'case': 'Nominative',
              'number': 'Plural',
              'answer': 'dōna',
            },
            {
              'case': 'Genitive',
              'number': 'Plural',
              'answer': 'dōnōrum',
            },
            {
              'case': 'Dative',
              'number': 'Plural',
              'answer': 'dōnīs',
            },
            {
              'case': 'Accusative',
              'number': 'Plural',
              'answer': 'dōna',
            },
            {
              'case': 'Ablative',
              'number': 'Plural',
              'answer': 'dōnīs',
            }
          ]
        },
        {
          'word': 'King',
          'type': 'Declension',
          'group': '3rd',
          'genders': [
            'Masculine'
          ],
          'singleGender': true,
          'fields': [
            {
              'case': 'Nominative',
              'number': 'Singular',
              'answer': 'rēx',
            },
            {
              'case': 'Genitive',
              'number': 'Singular',
              'answer': 'rēgis',
            },
            {
              'case': 'Dative',
              'number': 'Singular',
              'answer': 'rēgī',
            },
            {
              'case': 'Accusative',
              'number': 'Singular',
              'answer': 'rēgem',
            },
            {
              'case': 'Ablative',
              'number': 'Singular',
              'answer': 'rēge',
            },
            {
              'case': 'Nominative',
              'number': 'Plural',
              'answer': 'rēgēs',
            },
            {
              'case': 'Genitive',
              'number': 'Plural',
              'answer': 'rēgum',
            },
            {
              'case': 'Dative',
              'number': 'Plural',
              'answer': 'rēgibus',
            },
            {
              'case': 'Accusative',
              'number': 'Plural',
              'answer': 'rēgēs',
            },
            {
              'case': 'Ablative',
              'number': 'Plural',
              'answer': 'rēgibus',
            }
          ]
        },
        {
          'word': 'Body',
          'type': 'Declension',
          'group': '3rd',
          'genders': [
            'Neuter'
          ],
          'singleGender': true,
          'fields': [
            {
              'case': 'Nominative',
              'number': 'Singular',
              'answer': 'corpus',
            },
            {
              'case': 'Genitive',
              'number': 'Singular',
              'answer': 'corporis',
            },
            {
              'case': 'Dative',
              'number': 'Singular',
              'answer': 'corporī',
            },
            {
              'case': 'Accusative',
              'number': 'Singular',
              'answer': 'corpus',
            },
            {
              'case': 'Ablative',
              'number': 'Singular',
              'answer': 'corpore',
            },
            {
              'case': 'Nominative',
              'number': 'Plural',
              'answer': 'corpora',
            },
            {
              'case': 'Genitive',
              'number': 'Plural',
              'answer': 'corporum',
            },
            {
              'case': 'Dative',
              'number': 'Plural',
              'answer': 'corporibus',
            },
            {
              'case': 'Accusative',
              'number': 'Plural',
              'answer': 'corpora',
            },
            {
              'case': 'Ablative',
              'number': 'Plural',
              'answer': 'corporibus',
            }
          ]
        },
        {
          'word': 'Sheep',
          'type': 'Declension',
          'group': '3rd',
          'genders': [
            'Feminine'
          ],
          'singleGender': true,
          'fields': [
            {
              'case': 'Nominative',
              'number': 'Singular',
              'answer': 'ovis',
            },
            {
              'case': 'Genitive',
              'number': 'Singular',
              'answer': 'ovis',
            },
            {
              'case': 'Dative',
              'number': 'Singular',
              'answer': 'ovī',
            },
            {
              'case': 'Accusative',
              'number': 'Singular',
              'answer': 'ovem',
            },
            {
              'case': 'Ablative',
              'number': 'Singular',
              'answer': 'ove',
            },
            {
              'case': 'Nominative',
              'number': 'Plural',
              'answer': 'ovēs',
            },
            {
              'case': 'Genitive',
              'number': 'Plural',
              'answer': 'ovium',
            },
            {
              'case': 'Dative',
              'number': 'Plural',
              'answer': 'ovibus',
            },
            {
              'case': 'Accusative',
              'number': 'Plural',
              'answer': 'ovīs/ovēs',
            },
            {
              'case': 'Ablative',
              'number': 'Plural',
              'answer': 'ovibus',
            }
          ]
        },
        {
          'word': 'City',
          'type': 'Declension',
          'group': '3rd',
          'genders': [
            'Feminine'
          ],
          'singleGender': true,
          'fields': [
            {
              'case': 'Nominative',
              'number': 'Singular',
              'answer': 'urbs',
            },
            {
              'case': 'Genitive',
              'number': 'Singular',
              'answer': 'urbis',
            },
            {
              'case': 'Dative',
              'number': 'Singular',
              'answer': 'urbī',
            },
            {
              'case': 'Accusative',
              'number': 'Singular',
              'answer': 'urbem',
            },
            {
              'case': 'Ablative',
              'number': 'Singular',
              'answer': 'urbe',
            },
            {
              'case': 'Nominative',
              'number': 'Plural',
              'answer': 'urbēs',
            },
            {
              'case': 'Genitive',
              'number': 'Plural',
              'answer': 'urbium',
            },
            {
              'case': 'Dative',
              'number': 'Plural',
              'answer': 'urbibus',
            },
            {
              'case': 'Accusative',
              'number': 'Plural',
              'answer': 'urbīs/urbēs',
            },
            {
              'case': 'Ablative',
              'number': 'Plural',
              'answer': 'urbibus',
            }
          ]
        },
        {
          'word': 'Sea',
          'type': 'Declension',
          'group': '3rd',
          'genders': [
            'Neuter'
          ],
          'singleGender': true,
          'fields': [
            {
              'case': 'Nominative',
              'number': 'Singular',
              'answer': 'mare',
            },
            {
              'case': 'Genitive',
              'number': 'Singular',
              'answer': 'maris',
            },
            {
              'case': 'Dative',
              'number': 'Singular',
              'answer': 'marī',
            },
            {
              'case': 'Accusative',
              'number': 'Singular',
              'answer': 'mare',
            },
            {
              'case': 'Ablative',
              'number': 'Singular',
              'answer': 'marī',
            },
            {
              'case': 'Nominative',
              'number': 'Plural',
              'answer': 'maria',
            },
            {
              'case': 'Genitive',
              'number': 'Plural',
              'answer': 'marium',
            },
            {
              'case': 'Dative',
              'number': 'Plural',
              'answer': 'maribus',
            },
            {
              'case': 'Accusative',
              'number': 'Plural',
              'answer': 'maria',
            },
            {
              'case': 'Ablative',
              'number': 'Plural',
              'answer': 'maribus',
            }
          ]
        },
        {
          'word': 'Force',
          'type': 'Declension',
          'group': '3rd',
          'genders': [
            'Feminine'
          ],
          'singleGender': true,
          'fields': [
            {
              'case': 'Nominative',
              'number': 'Singular',
              'answer': 'vīs',
            },
            {
              'case': 'Genitive',
              'number': 'Singular',
              'answer': 'vīs',
            },
            {
              'case': 'Dative',
              'number': 'Singular',
              'answer': 'vī',
            },
            {
              'case': 'Accusative',
              'number': 'Singular',
              'answer': 'vim',
            },
            {
              'case': 'Ablative',
              'number': 'Singular',
              'answer': 'vī',
            },
            {
              'case': 'Nominative',
              'number': 'Plural',
              'answer': 'vīrēs',
            },
            {
              'case': 'Genitive',
              'number': 'Plural',
              'answer': 'vīrium',
            },
            {
              'case': 'Dative',
              'number': 'Plural',
              'answer': 'vīribus',
            },
            {
              'case': 'Accusative',
              'number': 'Plural',
              'answer': 'vīrīs/vīrēs',
            },
            {
              'case': 'Ablative',
              'number': 'Plural',
              'answer': 'vīribus',
            }
          ]
        },
        {
          'word': 'Fruit',
          'type': 'Declension',
          'group': '4th',
          'genders': [
            'Masculine'
          ],
          'singleGender': true,
          'fields': [
            {
              'case': 'Nominative',
              'number': 'Singular',
              'answer': 'frūctus',
            },
            {
              'case': 'Genitive',
              'number': 'Singular',
              'answer': 'frūctūs',
            },
            {
              'case': 'Dative',
              'number': 'Singular',
              'answer': 'frūctuī',
            },
            {
              'case': 'Accusative',
              'number': 'Singular',
              'answer': 'frūctum',
            },
            {
              'case': 'Ablative',
              'number': 'Singular',
              'answer': 'frūctū',
            },
            {
              'case': 'Nominative',
              'number': 'Plural',
              'answer': 'frūctūs',
            },
            {
              'case': 'Genitive',
              'number': 'Plural',
              'answer': 'frūctuum',
            },
            {
              'case': 'Dative',
              'number': 'Plural',
              'answer': 'frūctibus',
            },
            {
              'case': 'Accusative',
              'number': 'Plural',
              'answer': 'frūctūs',
            },
            {
              'case': 'Ablative',
              'number': 'Plural',
              'answer': 'frūctibus',
            }
          ]
        },
        {
          'word': 'Knee',
          'type': 'Declension',
          'group': '4th',
          'genders': [
            'Neuter'
          ],
          'singleGender': true,
          'fields': [
            {
              'case': 'Nominative',
              'number': 'Singular',
              'answer': 'genū',
            },
            {
              'case': 'Genitive',
              'number': 'Singular',
              'answer': 'genūs',
            },
            {
              'case': 'Dative',
              'number': 'Singular',
              'answer': 'genuī/genū',
            },
            {
              'case': 'Accusative',
              'number': 'Singular',
              'answer': 'genū',
            },
            {
              'case': 'Ablative',
              'number': 'Singular',
              'answer': 'genū',
            },
            {
              'case': 'Nominative',
              'number': 'Plural',
              'answer': 'genua',
            },
            {
              'case': 'Genitive',
              'number': 'Plural',
              'answer': 'genuum',
            },
            {
              'case': 'Dative',
              'number': 'Plural',
              'answer': 'genibus',
            },
            {
              'case': 'Accusative',
              'number': 'Plural',
              'answer': 'genua',
            },
            {
              'case': 'Ablative',
              'number': 'Plural',
              'answer': 'genibus',
            }
          ]
        },
        {
          'word': 'Day',
          'type': 'Declension',
          'group': '5th',
          'genders': [
            'Masculine',
            'Feminine'
          ],
          'singleGender': true,
          'fields': [
            {
              'case': 'Nominative',
              'number': 'Singular',
              'answer': 'diēs',
            },
            {
              'case': 'Genitive',
              'number': 'Singular',
              'answer': 'diēī',
            },
            {
              'case': 'Dative',
              'number': 'Singular',
              'answer': 'diēī',
            },
            {
              'case': 'Accusative',
              'number': 'Singular',
              'answer': 'diem',
            },
            {
              'case': 'Ablative',
              'number': 'Singular',
              'answer': 'diē',
            },
            {
              'case': 'Nominative',
              'number': 'Plural',
              'answer': 'diēs',
            },
            {
              'case': 'Genitive',
              'number': 'Plural',
              'answer': 'diērum',
            },
            {
              'case': 'Dative',
              'number': 'Plural',
              'answer': 'diēbus',
            },
            {
              'case': 'Accusative',
              'number': 'Plural',
              'answer': 'diēs',
            },
            {
              'case': 'Ablative',
              'number': 'Plural',
              'answer': 'diēbus',
            }
          ]
        },
        {
          'word': 'Thing',
          'type': 'Declension',
          'group': '5th',
          'genders': [
            'Feminine'
          ],
          'singleGender': true,
          'fields': [
            {
              'case': 'Nominative',
              'number': 'Singular',
              'answer': 'rēs',
            },
            {
              'case': 'Genitive',
              'number': 'Singular',
              'answer': 'reī',
            },
            {
              'case': 'Dative',
              'number': 'Singular',
              'answer': 'reī',
            },
            {
              'case': 'Accusative',
              'number': 'Singular',
              'answer': 'rem',
            },
            {
              'case': 'Ablative',
              'number': 'Singular',
              'answer': 'rē',
            },
            {
              'case': 'Nominative',
              'number': 'Plural',
              'answer': 'rēs',
            },
            {
              'case': 'Genitive',
              'number': 'Plural',
              'answer': 'rērum',
            },
            {
              'case': 'Dative',
              'number': 'Plural',
              'answer': 'rēbus',
            },
            {
              'case': 'Accusative',
              'number': 'Plural',
              'answer': 'rēs',
            },
            {
              'case': 'Ablative',
              'number': 'Plural',
              'answer': 'rēbus',
            }
          ]
        },
        {
          word: 'Long',
          type: 'Adjective Comparison', // declension or adjective
          group: 'Regular', // Regular or irregular
          fields: [
            { type: 'Positive', answer: 'longus' },
            { type: 'Comparative', answer: 'longior' },
            { type: 'Superlative', answer: 'longissimus' }
          ]
        },
        {
          word: 'One',
          type: 'Number', // declension or adjective
          fields: [
            { type: 'Cardinal', answer: 'ūnus (-a, -um)' },
            { type: 'Ordinal', answer: 'prīmus' },
            { type: 'Adverbial', answer: 'semel' },
            { type: 'Distributive', answer: 'singulī • ūnī' }
          ]
        }
]

export default practiceQuestions
