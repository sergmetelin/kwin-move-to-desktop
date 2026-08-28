## Move Window and Switch to Desktop

Initial release. A minimal KWin 6 script that moves the active window to a
virtual desktop **and switches your view to follow it**, matching
Hyprland's `movetoworkspace` behavior - something KWin's built-in
"Window to Desktop N" shortcut doesn't do on its own.

### Features
- 9 global shortcuts (desktops 1-9), each moving the active window to that
  desktop and switching focus to it in one action
- No config UI, no dependencies - just bind the shortcuts you want
- Built against the current KWin 6 scripting API (`workspace.desktops`,
  `Window.desktops`)

### Requirements
- KDE Plasma 6 / KWin 6

### Install
Download `movewindowandswitchdesktop.kwinscript` below, then:

​```sh
kpackagetool6 -t KWin/Script -i movewindowandswitchdesktop.kwinscript
​```

or via `System Settings → Window Management → KWin Scripts → Install from File...`

Shortcuts ship **unbound** - set them under
`System Settings → Shortcuts → KWin`, filtering for "Switch to Desktop".
See the README for full setup steps and troubleshooting.
