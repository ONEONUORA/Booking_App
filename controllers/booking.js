// This controller handles booking a room.
// In a full app you might update room availability or create a separate Booking model.
export const bookRoom = async (req, res) => {
    const { roomId, date } = req.body;
    // Here you would add logic to check availability and update the room document.
    res.status(200).json({ message: `Room ${roomId} booked for date ${date}` });
  };
  