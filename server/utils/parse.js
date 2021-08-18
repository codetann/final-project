export const _parse = (data) => {
  return data.businesses.map((d) => {
    return {
      url: d.url,
      name: d.name,
      yelp_id: d.id,
      price: d.price,
      phone: d.phone,
      rating: d.rating,
      image: d.image_url,
      categories: d.categories,
      review_count: d.review_count,
      display_phone: d.display_phone,
      latitude: d.coordinates.latitude,
      longitude: d.coordinates.longitude,
      distance: d.distance * 0.000621371192,
      location: d.location.display_address.join(" "),
    };
  });
};
