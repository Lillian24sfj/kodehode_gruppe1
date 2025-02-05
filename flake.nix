{
  description = "Personal System";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs =
    { self, nixpkgs }:
    let
      withSystem = nixpkgs.lib.genAttrs [
        "x86_64-linux"
        "x86_64-darwin"
        "aarch64-linux"
        "aarch64-darwin"
      ];

      withPkgs = callback: withSystem (system: callback (import nixpkgs { inherit system; }));
    in
    {
      devShells = withPkgs (pkgs: {
        default = pkgs.mkShell {
          # Project Dependencies
          packages = [
            # Development Tooling
            pkgs.nodejs_22

            # Utilities
            pkgs.jq
          ];

          # Development Environment Variables
          env = { };

          # Scripts to run at startup
          shellHook = '''';
        };
      });

      formatter = withPkgs (pkgs: pkgs.nixfmt-rfc-style);
    };
}
