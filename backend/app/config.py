from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    # Database
    database_url: str = "sqlite:///./hms.db"

    # JWT
    secret_key: str = "your-secret-key-here-change-in-production"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30

    # Razorpay
    razorpay_key_id: str = "rzp_test_your_key_id"
    razorpay_key_secret: str = "your_razorpay_secret"

    # Email (mock)
    smtp_server: Optional[str] = None
    smtp_port: Optional[int] = None
    smtp_username: Optional[str] = None
    smtp_password: Optional[str] = None

    class Config:
        env_file = ".env"

settings = Settings()