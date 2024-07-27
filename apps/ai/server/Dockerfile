FROM python:3.12-slim

RUN python -m pip install --no-cache-dir --upgrade pip && \
    python -m pip install --no-cache-dir \
    torch --index-url https://download.pytorch.org/whl/cpu

WORKDIR /app

COPY . .

RUN python -m pip install --no-cache-dir -r requirements.txt

EXPOSE 4000

CMD ["python", "app.py"]