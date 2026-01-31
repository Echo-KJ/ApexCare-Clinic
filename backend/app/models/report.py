from sqlalchemy import Column, Integer, Float, Date
from ..database import Base
from datetime import date

class DailyReport(Base):
    __tablename__ = "daily_reports"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(Date, unique=True, nullable=False)
    total_bookings = Column(Integer, default=0)
    total_checkins = Column(Integer, default=0)
    total_checkouts = Column(Integer, default=0)
    total_revenue_cash = Column(Float, default=0.0)
    total_revenue_online = Column(Float, default=0.0)
    occupancy_rate = Column(Float, default=0.0)