Feature: Login

Scenario: Valid Login
    Given I'm on the login page
    When I set a registered my email and password
    Then I have a successful login

