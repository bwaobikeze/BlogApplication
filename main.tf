terraform {
    required_providers {
        google-beta = {
            source = "hashicorp/google-beta"
            version = "~> 4.0"
        }

    }
}

// Configure the Google Cloud provider
provider "google-beta" {
credentials = file(var.credentials_file)
  user_project_override = true
}

// Create a Google Cloud project
provider "google-beta" {
  alias = "no_user_project_override"
  user_project_override = false
}

variable "credentials_file" {
    type = string
    default = "C:/Users/bwaob/Desktop/GoogleAccountKey/blogwebapplication-431305-d397ee5c4238.json"
}

// Create a Firebase project
resource "google_firebase_project" "firebase" {
  provider = google-beta
  project  = "blogwebapplication-431305"
}

// Create a Firebase web app
resource "google_firebase_web_app" "web_app" {
  provider = google-beta
  project = "blogwebapplication-431305"
  display_name = "WebBlogApp"
}

// Create a Firestore database
resource "google_firestore_database" "firestore" {
  provider = google-beta
  project = "blogwebapplication-431305"
  location_id = "us-central1"
  name = "default"
  type = "FIRESTORE_NATIVE"
}
