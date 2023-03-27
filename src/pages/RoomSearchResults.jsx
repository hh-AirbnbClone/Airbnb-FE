import { useQuery } from 'react-query';
import axios from 'axios';

function RoomSearchResults({ address, checkInDate, checkOutDate, guestNum }) {
  const queryKey = ['roomSearchResults', { address, checkInDate, checkOutDate, guestNum }];

  const { isLoading, error, data } = useQuery(queryKey, () =>
    axios.get('/rooms', { params: { address, checkInDate, checkOutDate, guestNum } })
      .then(response => response.data)
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    data
  );
}