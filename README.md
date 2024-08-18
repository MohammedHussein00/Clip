System Analysis
Overview
Application Name: Clip

Description: Clip is a web application that allows users to share their best gaming moments by uploading videos. It uses Angular for the frontend and ASP.NET for the backend API. Users can create, view, and manage their video content.

Functional Requirements
User Management:

Users should be able to register, login, and manage their profiles using Microsoft Identity.
User authentication and authorization are handled by Microsoft Identity.
Video Management:

Users can upload videos, including a title, video URL, and thumbnail.
Users can view their uploaded videos and manage them.
Users can view other users' videos.
Video Metadata:

Each video has a title, video URL, thumbnail, and thumbnail URL.
Each video is associated with the user who uploaded it and has a creation date.
Non-Functional Requirements
Performance:

The application should handle multiple users uploading and viewing videos simultaneously without performance degradation.
Security:

Ensure that user data and videos are securely stored and transmitted.
Implement proper authentication and authorization mechanisms.
Scalability:

The system should be able to scale horizontally to handle increased load.
User Interface:

The UI should be intuitive and responsive, providing a good user experience on both desktop and mobile devices.
Entity-Relationship Diagram (ERD)
Here’s the ERD for your application:

Entities
User

Represents users authenticated via Microsoft Identity.
Video

Represents the videos uploaded by users.
Relationships
A User can upload multiple Videos.
Each Video is associated with one User.
ERD Diagram
sql
Copy code
+-----------------+        +----------------------+
|     User        |        |        Video          |
+-----------------+        +----------------------+
| UserId (PK)     |1     * | Id (PK)              |
| UserName        |--------| Title                |
| Email           |        | videoUrl             |
| ...             |        | thumbnail            |
+-----------------+        | thumbnailUrl         |
                           | UserId (FK)          |
                           | created              |
                           +----------------------+
Database Mapping
Database Tables
User Table

UserId (Primary Key, String, Microsoft Identity user identifier)
UserName (String, User’s display name)
Email (String, User’s email address)
Other relevant fields (e.g., profile information)
Video Table

Id (Primary Key, Integer, Auto-increment)
Title (String, Title of the video)
videoUrl (String, URL where the video is stored)
thumbnail (String, Base64 encoded thumbnail or path)
thumbnailUrl (String, URL of the thumbnail image)
UserId (Foreign Key, String, References User table)
created (DateTime, Date and time when the video was created)
