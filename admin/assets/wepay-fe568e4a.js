const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAolBMVEUAAAAAofEAovAAo/EAovEAofEAofEAovEAovEAovAAofEAo/IApvQAwv8AovEAovEAovEAo/EAo/EAr/8Auv8AovAAovEAovIAovIApPQApvQAovEAovEApPMAofEAo/MAovAAovEAofEAovEAo/EAovIAovEArP8AovEAo/IAo/IApfUAovAAovEAovIAovEAovEApPQApPEAovAAp/cAofDyE2U7AAAANXRSTlMAttAk1vmpRv3x5RIWAu2B6WdZCQXgxIdhLSCieSi7UfTb1JWMcpwNazs4Gb+wS8mPQDOrHDkbp7MAAAPBSURBVGje7drZkppAFIDh44K2C5uyqCCI+77mvP+rpWJqAqahm61JJeG7nZr5C9vTYDtQq9Vq/4j53nYaZXHs/TRVdaC2sWzmesjLGhsFRVioY2Z3aKEozRlrcU0URzsmX6+JIilJ12xYKNZyFx/eoGjr+DlSUDQp9sVWUbxtXLiN4ilGzChhFbp0eI9VsOmwjVVw6LCDmXTmwy9ZFulMhxuYRW8cmcMse0jRcB/yhdt1uA7X4f8o3G7G8iC0ayaRCoRbUMCyDv8N4UYn1gpCEykJETtOE0xUh+twsfCoF4OUEba7lAdw3MoIjyCzAflDYR//UHhbSthsUnj3aDNLuKgV9Zm3ovCBOl2oJmzK8EsgJMz/zH3EKsORM9qVkDD/TxpaWWGimcEy0BbIsIls3lhCuN/ZPGbG16XMjv5mde4jTdlR+3SBsHI/yBBj2HUbPfyghj89YMGwstlBMvmoNiMH4YPwJ5eCYWcIPLO9J1HHozNSKCzpKe9/E48gSifq/pAzTPwM917di2zTU1IovA+XUlcdZ6VuJv7jG6RwwfzhcMkOLwUjtIbqc+oHLBI2fw7u08IYmjNivNut7GHqkcOVMIHUGI0h3tQO8odv713jjiy97ROS2mozZ1h/Xy/y3EZG4oBvLJI9TH7sHEeCfH3G3jbUL1LG8Dl8k3AprO8Mx76jpAuHs/TMcOTOYjzuQerwJMN3QdYYuKbujaQKHwGgg6mYQ0jlpDckfnie+kFIm0NqY3+rccKz8HGN051G90qd+6rLR/vFCk9TfgulRLtzBTV3AFys8PXHFBL++s6ji2i+n0PusyLhdXh3Y7AGH+eo+BPpPPOHm+9Nb4FMWwNC4zOGzlc5Z5i8r0VnLq8PVDfU1se5wujCD5vkZb58jO/OitlJh3nCi5+/NVlgrNsDogYWxpC206zh8CN260KQYvnwYR5gAq8rZw2T7tc2e+9jlGm34NO1hxTGYnPCuAiHojVZv6xmsDy/7iPqQU92CTJp6jBTGLUWpDCnlpez2Pww9rvcrOxKmIp3ldOHkawNdna0RErmxY69ETa7rGwbM1HUEzccWk7ir/ppm5iZ5Ey54VB/+/tb+dvVDjAnr8sI0wJn7er+4zrau2tPw0Kag/iweK06DC+sBD1UK6wCofcwF6vQB8oVq9Cgw+MeVkAHWgfFI6fY8xrxOplOqET/eyS0FiiYDfF8gkJ54RBXOsvtASSaSCiMNwCGQ4BiSLYMTMZew/KRzgy4jO6qvSgz2m/oJ0hr1yrLSYZa7b/wHQarTKSVd1nXAAAAAElFTkSuQmCC",v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAApVBMVEUAAAAm0CYJuwcJvAcJvAgWxxYKvAcMwAwKvAgOvghW21YKvAgLvQsJvAcKuwgJvAgJvAgKwAoJvAcJuwgJvAcKvAcKvAgLvAgKvgkOvgcJvAcJvAgKvAgKvAgKvQgKvQgNvw0JvAgKuwcKvAcKvAgJvQkKvQoKvQoKvAcJvAcKvQgJvgkLvQcLvQgNvQgKvAcJvAkPwg8KvAgKvgoJvAgKvAgJuwdC6sY3AAAANnRSTlMABvX7ogvUFOQdA3cs+OnhqBnZwYjufVg4IvHdyZ2CZCfEtK2VVUswjmtgUEZCPM5wELozvZMhr8MqAAADcUlEQVRo3u3a13KjQBAF0AsCARIo52TlHKy1ff//03bLrrUke5ghDPYL51UltbruVNMUIJfL5XK5XEpGve/3Tqfe1LuW8DP63Yk1c3mnPbI6K99Adkq9zrzCEMFrp5dJ8/ZhXKHCYP50hV69sclIzNpRX9/2rsgY3Imjp2y5wpgGrfSlDVFZNTNt6WODCQ2ekFy9xhSaUyS0GjCVoFxKlO6SqTUTJN2/UIPqBjG9VKiFuUIsxwF1KSOGboH8jcrrAnXaIaKzSb0izhK/Tb2aB0RhN6hTYG0QjUWNKpM6ItpTn+KTgag8k7rMT7gpqTpfUA9zOcWdY3EGqRO1qJavuDOdkzxAolSkBqNuCXecbeE98BLCdZlaodZ77GXXjjBGRkyp3fLwYH2bCkOEOjOdxs7GA/8P75wyOtJ/1njkvBV4z0IIO2BiwdjHI+O5zUemDbEVk3I7DhAWrvoqZQlz85wW5S5dA1/4rxSoQajUpkALwHnIcIszvnKWBYq4EJqKjwz+uVoUG2z7wLdwBwzhxYl48/Fhm98Nn218c2gwVBciLVISTP3P98VCMAQ3r5TYQmROoUIfH54D5WLhjCm1iDUvl59H9SJfLIzygHJNiIRlYzqfv9wqSBaLw5AqRYhUGGKCT97zsnyGyKZJtQpEAoZo21CpjxlFABGTYZ4hcQtXzYSIyzCuAZmVNFz16Coy1B7hXhThqg9XU/4FdbhqM4jUGG4dEm7HpIp6FSjH/qvdqpZb5SMlzoJwZ4zrCBGHEnN84VmMz4HQkBI+7tkdM8kWCrE3SljKcNVaSdbqwm176I2YTA8hpH1sFeGquQjTooS5eQ93YjKpFsJMKVM54bp3KaUIK1SNUgHTsBDOZ4Y2kFgwMzXI+AEzYnqQmjAjZcgZRWaiaEChxyyYPpQ6zMATIqhRuxqisC/UbGYjEs+lVsUrIppqrTysI7J+ldo0POA3Ko8cxFKfUYu5neTRYnqTEuLbB0ypckIC6Z97zetIyGIK7gGJ7ZhYYWsjuW3isuM+0rj8Tlk4TGLYqSOlLoWyf+NmzDvNVqfmUqq6XBvQoXpX9uVjhD9ZxYIw1tFyP4Um01srK9wYfrf8tpgVh267XW1cmovtbu0b0Gj3P7eOgR+14DvLQwKpIx718ONMsrLHL9iPJjZyuVwul8vl9PsL1Ii+zGspdXoAAAAASUVORK5CYII=";export{A as a,v as w};
