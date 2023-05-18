import React, { useState, useEffect } from 'react';
import { Skeleton } from 'primereact/skeleton';

function GCEmpresa() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="card p-2">
      <h1 className="">Nombre de la tabla</h1>
      <div className="relative">
        <Skeleton
          className={`relative ${loading ? 'z-2' : 'z-1'}`}
          shape="rectangle"
          width="100%"
          height="300px"
        />
        <iframe
          title="Prueba2"
          width="100%"
          height="300"
          className={`border-round-lg absolute bottom-0 left-0 top-0 right-0 m-auto ${
            loading ? 'z-1' : 'z-2'
          } `}
          src="https://app.powerbi.com/reportEmbed?reportId=80d30d25-2b90-47df-8509-503a0e6d32a0&autoAuth=true&ctid=b4a40545-7779-4b38-aff7-1f1738f80840"
          allowFullScreen="true"
        ></iframe>
      </div>
    </div>
  );
}

export default GCEmpresa;
