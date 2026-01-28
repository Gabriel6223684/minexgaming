class Mod:
    def __init__(self, name):
        self.name = name
        self.unlimited = False

class Game:
    def __init__(self):
        self.mods = [Mod("Speed Boost"), Mod("Infinite Ammo"), Mod("God Mode")]

def enable_unlimited_mods(game):
    for mod in game.mods:
        mod.unlimited = True
    print("All mods have been set to unlimited.")

def display_menu(game, choice=None):
    print("Mod Menu:")
    for idx, mod in enumerate(game.mods):
        status = "Unlimited" if mod.unlimited else "Limited"
        print(f"{idx + 1}. {mod.name} - {status}")
    if choice is None:
        try:
            choice = int(input("Select a mod to toggle unlimited status (0 to exit): "))
        except ValueError:
            print("Entrada inválida! Por favor, digite um número válido.")
            return True  # continua o menu
    if choice == 0:
        print("Saindo do menu.")
        return False  # sai do menu
    elif 1 <= choice <= len(game.mods):
        selected_mod = game.mods[choice - 1]
        selected_mod.unlimited = not selected_mod.unlimited
        status = "Unlimited" if selected_mod.unlimited else "Limited"
        print(f"{selected_mod.name} is now set to {status}.")
    else:
        print(f"Por favor, digite um número entre 0 e {len(game.mods)}.")
    return True  # continua o menu



def is_mod_accessible(mod):
    return mod.unlimited

def check_mod_status(mod):
    return "Unlimited" if mod.unlimited else "Limited"

def set_mod_status(mod, status):
    mod.unlimited = status

def get_unlimited_mods(game):
    return [mod for mod in game.mods if mod.unlimited]

if __name__ == "__main__":
    # Exemplo de uso local para testes
    game = Game()
    enable_unlimited_mods(game)
    display_menu(game)
    first_mod = game.mods[0]
    print(f"Is '{first_mod.name}' accessible? {'Yes' if is_mod_accessible(first_mod) else 'No'}")
    print(f"Status of '{first_mod.name}': {check_mod_status(first_mod)}")
    set_mod_status(first_mod, False)
    print(f"New status of '{first_mod.name}': {check_mod_status(first_mod)}")
    print("Unlimited Mods:")
    for mod in get_unlimited_mods(game):
        print(f"- {mod.name}")
