terraform {
    required_providers {
        google = {
        source  = "hashicorp/google"
        }
        google-beta = {
        source  = "hashicorp/google-beta"
        }
    }
}

variable "credentials_file" {
    type = string
    default = "C:/Users/username/Downloads/blogwebapplication-431305-3b3b7b7b7b7b.json"
}
variable "project_id" {
    type = string
    default = "blogwebapplication-431305"
  
}

provider "google" {
    credentials = file(var.credentials_file)
    project     = "blogwebapplication-431305"
    region      = "us-central1"
}
# provider "google-beta" {
#     credentials = file(var.credentials_file)
#     project     = "blogwebapplication-431305"
#     region      = "us-central1"
# }

# resource "google_firebase_project" "BlogWebApplication" {
#     provider = google-beta
#     project  = var.project_id
# }
