"use client";

export default function OpenRolesCTA() {
  return (
    <section className="bg-[#ffffff]" style={{ padding: '80px 0 160px 0' }}>
      <div className="container max-w-7xl">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', marginTop: '40px' }}>
          <h2 className="font-body" style={{ textAlign: 'center', fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '-0.03em', fontWeight: '500', color: '#000' }}>
            Open Roles
          </h2>
          <button style={{ 
            backgroundColor: '#000', 
            color: 'white', 
            padding: '16px 36px', 
            fontWeight: '500', 
            fontSize: '0.9rem',
            textTransform: 'uppercase', 
            letterSpacing: '0.05em',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#222'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#000'}
          >
            APPLY NOW →
          </button>
        </div>
      </div>
    </section>
  );
}
