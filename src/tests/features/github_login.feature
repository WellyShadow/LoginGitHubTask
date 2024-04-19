Feature: GitHub Login

  Scenario: Successful login
    Given I am on the GitHub login page
    When I enter my username 
    And I enter my password
    And I click the login button
    Then I should be logged in successfully

  Scenario: Failed login
    Given I am on the GitHub login page
    When I enter my username as "username" 
    And I enter my password as "password"
    And I click the login button
    Then I should get an error
  