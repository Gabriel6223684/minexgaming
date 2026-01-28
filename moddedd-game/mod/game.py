import func

def main():
    game = func.Game()
    func.enable_unlimited_mods(game)
    continue_menu = True
    while continue_menu:
        # Para usar input no site, sem parâmetro
        continue_menu = func.display_menu(game)


if __name__ == "__main__":
    main()
