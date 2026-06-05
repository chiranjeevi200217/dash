import os

JS_DIR = r"c:\Users\chiranjeevi\Desktop\G3\public\assets\js"
EXCLUDE_FILES = {"main.js", "todolist.js", "appSettings.js"}

def wrap_file(filepath):
    print(f"Wrapping: {filepath}")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read().strip()
        
    # Check if already wrapped
    if content.startswith("(function() {") and content.endswith("})();"):
        print(f"Already wrapped: {filepath}")
        return
        
    wrapped = f"(function() {{\n{content}\n}})();"
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(wrapped)

def main():
    for file in os.listdir(JS_DIR):
        if file.endswith('.js') and file not in EXCLUDE_FILES:
            wrap_file(os.path.join(JS_DIR, file))

if __name__ == '__main__':
    main()
