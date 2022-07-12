function Page({ data }: {data: string}) {
    return <div>
        <h2>Data from google via HTTPS</h2>
        <div style={{ width: '80vw'}}><code>{data}</code></div>
    </div>
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://google.com`)
    const data = await res.text()
  
    // Pass data to the page via props
    return { props: { data } }
  }
  
  export default Page
  