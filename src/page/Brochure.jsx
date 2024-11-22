
function Brochure() {
    return (
        <div style={{ height: '100vh' }}>
            <embed
                src="/brochure.pdf"
                width="100%"
                height="100%"
                type="application/pdf"
            />
        </div>
    );
}

export default Brochure;
