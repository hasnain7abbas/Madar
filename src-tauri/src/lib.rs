use serde::{Deserialize, Serialize};
use std::sync::Mutex;
use tauri::State;

#[derive(Default)]
pub struct AppState {
    favorites: Mutex<Vec<String>>,
}

#[derive(Serialize, Deserialize)]
pub struct SimInfo {
    pub id: String,
    pub name: String,
    pub category: String,
}

#[tauri::command]
fn get_favorites(state: State<AppState>) -> Vec<String> {
    state.favorites.lock().unwrap().clone()
}

#[tauri::command]
fn add_favorite(id: String, state: State<AppState>) {
    let mut favs = state.favorites.lock().unwrap();
    if !favs.contains(&id) {
        favs.push(id);
    }
}

#[tauri::command]
fn remove_favorite(id: String, state: State<AppState>) {
    let mut favs = state.favorites.lock().unwrap();
    favs.retain(|f| f != &id);
}

pub fn run() {
    tauri::Builder::default()
        .manage(AppState::default())
        .invoke_handler(tauri::generate_handler![
            get_favorites,
            add_favorite,
            remove_favorite,
        ])
        .run(tauri::generate_context!())
        .expect("error while running Madar");
}
