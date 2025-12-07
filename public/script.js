const pcBuilderForm = document.getElementById('pc-builder-form')

pcBuilderForm.addEventListener('submit', async (e) =>{
  event.preventDefault();

   const budget = document.getElementById('budget').value;
    const purpose = document.getElementById('purpose').value;
    const brand = document.getElementById('brand').value;

    async function pcBuilder() {
    try {
      // Example dummy data — replace with your real values
      // const data = {
      //   budget: 50000,
      //   purpose: "gaming",
      //   brand: "AMD"
      // };

      const response = await fetch('/api/build/pc-builder', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({budget, purpose, brand})
      });

      const result = await response.json();

      const build = result.data;

      document.getElementById("CPU").textContent = build.CPU;
      document.getElementById("GPU").textContent = build.GPU;
      document.getElementById("RAM").textContent = build.RAM;
      document.getElementById("Motherboard").textContent = build.Motherboard;
      document.getElementById("Storage").textContent = build.Storage;
      document.getElementById("PSU").textContent = build.PSU;
      document.getElementById("Case").textContent = build.Case;
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("generate-build").textContent = "Failed to load PC build.";
    }
  }
  await pcBuilder();
  alert("PC build is ready!"); 

})


  

