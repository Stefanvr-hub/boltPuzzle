import React, { useState } from 'react';

const RemoveBackground: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [resultImageUrl, setResultImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const uploadImage = async () => {
    if (!selectedImage) return;

    setLoading(true);

    const formData = new FormData();
    formData.append('image_file', selectedImage);
    formData.append('size', 'auto');

    try {
      const res = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': 'YOUR_API_KEY_HERE',
        },
        body: formData,
      });

      if (!res.ok) throw new Error('Failed to remove background');

      const blob = await res.blob();
      setResultImageUrl(URL.createObjectURL(blob));
    } catch (error) {
      alert('Error removing background. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Remove Image Background</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={uploadImage} disabled={!selectedImage || loading}>
        {loading ? 'Processing...' : 'Remove Background'}
      </button>

      {resultImageUrl && (
        <div style={{ marginTop: '20px' }}>
          <h3>Result:</h3>
          <img src={resultImageUrl} alt="Processed" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default RemoveBackground;
