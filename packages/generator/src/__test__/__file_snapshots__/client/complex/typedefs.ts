/*
 *
 * Code generated by clientql generator.
 * DO NOT EDIT.
 * Please don't change this file manually but run generator to update it.
 * For more information check: https"//github.com/vadistic/clientql
 *
 */

/*
 *
 * Client Runtime TypeDefs
 *
 */

export const TYPEDEFS = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "MyQuery"
      },
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "findEventsAtVenue"
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "venueId"
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID"
                  }
                }
              }
            }
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Event"
              }
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "findPerson"
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id"
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID"
                  }
                }
              }
            }
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Person"
            }
          }
        }
      ]
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "MyMutation"
      },
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteEvent"
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "eventId"
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID"
                  }
                }
              }
            }
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Event"
              }
            }
          }
        }
      ]
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Stakeholder"
      },
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "id"
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID"
              }
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name"
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "company"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "stake"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Stake"
            }
          }
        }
      ]
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Client"
      },
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "id"
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID"
              }
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name"
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "events"
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Event"
              }
            }
          }
        }
      ]
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Performer"
      },
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "id"
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID"
              }
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name"
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "contact"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "speciality"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "fee"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int"
            }
          }
        }
      ]
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Speaker"
      },
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "id"
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID"
              }
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name"
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "contact"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }
      ]
    },
    {
      kind: "UnionTypeDefinition",
      name: {
        kind: "Name",
        value: "Person"
      },
      types: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Client"
          }
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Stakeholder"
          }
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Speaker"
          }
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Performer"
          }
        }
      ]
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Venue"
      },
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "id"
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID"
              }
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name"
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "address"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "maxOccupancy"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int"
            }
          }
        }
      ]
    },
    {
      kind: "InterfaceTypeDefinition",
      name: {
        kind: "Name",
        value: "Event"
      },
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "id"
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID"
              }
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name"
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "startsAt"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "endsAt"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "venue"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Venue"
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "minAgeRestriction"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int"
            }
          }
        }
      ]
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Concert"
      },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Event"
          }
        }
      ],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "id"
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID"
              }
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name"
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "startsAt"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "endsAt"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "venue"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Venue"
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "previousVenues"
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Venue"
                }
              }
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "minAgeRestriction"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int"
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "performingBand"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Performer"
            }
          }
        }
      ]
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Festival"
      },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Event"
          }
        }
      ],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "id"
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID"
              }
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name"
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "startsAt"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "endsAt"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "venue"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Venue"
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "minAgeRestriction"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int"
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "performers"
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Performer"
              }
            }
          }
        }
      ]
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Conference"
      },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Event"
          }
        }
      ],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "id"
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID"
              }
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name"
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "startsAt"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "endsAt"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "venue"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Venue"
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "minAgeRestriction"
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int"
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "speakers"
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Speaker"
              }
            }
          }
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "workshops"
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            }
          }
        }
      ]
    },
    {
      kind: "SchemaDefinition",
      operationTypes: [
        {
          kind: "OperationTypeDefinition",
          operation: "query",
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "MyQuery"
            }
          }
        },
        {
          kind: "OperationTypeDefinition",
          operation: "mutation",
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "MyMutation"
            }
          }
        }
      ]
    }
  ]
}

