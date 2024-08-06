terraform {
  required_providers {
    google-beta = {
      source  = "hashicorp/google-beta"
      version = "~> 4.0"
    }

  }
}

// Configure the Google Cloud provider
provider "google-beta" {
  credentials = file(var.credentials_file)
}


variable "credentials_file" {
  type    = string
  default = "C:/Users/bwaob/Desktop/GoogleAccountKey/blogapplication-431707-4077aa507afe.json"
}
resource "google_firebase_project" "project" {
  provider = google-beta
  project  = "blogapplication-431707"
}


// Create a Firebase web app
resource "google_firebase_web_app" "web_app" {
  provider     = google-beta
  project      = "blogapplication-431707"
  display_name = "blogapp"
}

// Create a Firestore database
resource "google_firestore_database" "firestore" {
  provider    = google-beta
  project     = "blogapplication-431707"
  location_id = "us-central1"
  name ="(default)"
  type        = "FIRESTORE_NATIVE"
}

