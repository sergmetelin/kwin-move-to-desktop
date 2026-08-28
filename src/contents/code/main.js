// Move the active window to virtual desktop N and switch focus to it,
// matching Hyprland's `movetoworkspace` behavior.
//
// Registers 9 global shortcuts (unbound by default — assign keys in
// System Settings > Shortcuts > KWin, search "Switch to Desktop").

for (let i = 1; i <= 9; i++) {
    (function (desktopIndex) {
        registerShortcut(
            "MoveAndSwitchDesktop" + desktopIndex,
            "Move Window && Switch to Desktop " + desktopIndex,
            "",
            function () {
                const targetDesktop = workspace.desktops[desktopIndex - 1];
                if (!targetDesktop) {
                    return;
                }

                const win = workspace.activeWindow;
                if (win) {
                    win.desktops = [targetDesktop];
                }

                workspace.currentDesktop = targetDesktop;
            }
        );
    })(i);
}
