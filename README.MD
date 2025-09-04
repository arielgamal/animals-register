Ubuntu:
    python -m venv venv
    source venv/bin/activate
    pip list
    deactivate


pip install fastapi
pip install "uvicorn[standart]"



uvicorn animals:app --reload
fastapi run animals.py
fastapi dev animals.py


pip freeze > requirements.txt
pip install -r ./requirements.txt

