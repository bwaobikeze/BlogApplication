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
  default = GOOGLE_CREDENTIALS_FILE
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

resource "google_cloudfunctions_function" "function" {
  provider = google-beta
  project  = "blogapplication-431707"
  name     = "blogapp"
  runtime  = "nodejs16"
  entry_point = "BlogBackend"
  trigger_http = true
  region = "us-central1"
  source_archive_bucket = "blogapplication-431707.appspot.com"
  source_archive_object = "BlogBackend.zip"
}

