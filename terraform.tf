provider "azurerm" {
  features {}
}

resource "azurerm_storage_account" "example" {
  name                     = var.storage_account_name
  location                 = var.location
  resource_group_name      = var.resource_group_name
  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"
}

variable "storage_account_name" {
  description = "The name of the storage account."
  type        = string
}

variable "location" {
  description = "The location where the storage account will be created."
  type        = string
  default     = "eastus"
}

variable "resource_group_name" {
  description = "The name of the resource group where the storage account will be created."
  type        = string
}