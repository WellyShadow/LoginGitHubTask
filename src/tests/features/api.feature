Feature: Api requests

  Scenario: Get all posts
    When I requests all posts
    Then I should get all posts

  Scenario: Create post
    When I send post request to create post
    Then I should get created post

  Scenario: Update post id
    When I send put request to update post id
    Then I should get new post id
  