Feature: Este archivo contiene escenarios de prueba de la web de openwebinars.

  @abrir @todo
  Scenario: abrir la web de angular
    Given el usuario abre la web de angular
    Then la web abierta es la correcta


  @secciones @todo
  Scenario Outline: abrir distintas secciones de angular
    Given el usuario abre la web de angular
    Then la web abierta es la correcta
    When abrimos la seccion <seccion>
    Then se abre la seccion <seccion>

    Examples:
      | seccion   |
      | features  |
      | resources |
      | events    |

  @buscador @todo
  Scenario Outline: realizar varias búsquedas.
    Given el usuario abre la web de angular
    Then la web abierta es la correcta
    When buscamos la palabra <palabra>

    Examples:
      | palabra      |
      | angular      |
      | openwebinars |
