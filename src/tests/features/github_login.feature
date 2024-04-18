

Feature: GitHub Login

  Scenario: Successful login
    Given I am on the GitHub login page
    When I enter my username and password
    And I click the login button
    Then I should be logged in successfully