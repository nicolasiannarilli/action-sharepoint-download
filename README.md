# action-sharepoint-download
A simple Github Action that download an archive from a Sharepoint library  and download it to a repository

## Inputs

#### `site_url`

**Required** The complete url of your sharepoint site. Example : `https://you.sharepoint.com/sites/mySite`

#### `target_folder`

**Required** The path relative to the server where to download a file. Example `Shared documents/releases`.

> :warning: Do not include the first slash

#### `library_file`

**Required** The path relative to the library where the file to download. Example `Shared documents/releases/file.txt`.

> :warning: Do not include the first slash

#### `sharepoint_user`

**Required** The username to use for authentication. Example `roger.tester@mydomain.com`.

#### `sharepoint_password`

**Required** The user's password. Example `MyPassword123!`. 

> :bulb: Tip : It is recommended to use GitHub Actions Secrets to store sensible informations like passwords

## Example usage 

This action is particularly useful when triggered by new releases :

```yml
name: 'Sharepoint release'

on:
  release:
    types: created

jobs:
  download:
    runs-on: ubuntu-latest
    steps:
    
    - name: Cloning repo # This step is required
      uses: actions/checkout@v3

    - name: Download from Sharepoint
      uses: nicolasiannarilli/action-sharepoint-download@v1.0.0
      with:
       site_url: 'https://you.sharepoint.com/sites/mySite'
       library_folder: 'Shared documents/releases'
       target_folder: 'download'
       sharepoint_user: ${{ secrets.USER }}
       sharepoint_password: ${{ secrets.PASSWORD }}
```

