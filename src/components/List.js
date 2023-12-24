import React from "react";

export default function List() {
  return (
    <div>
      <div
        class="accordion accordion-flush shadow-lg"
        id="accordionFlushExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Cost Savings
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Refurbished devices are generally more affordable than their
              brand-new counterparts. This allows consumers to access
              high-quality electronics at a fraction of the cost.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Quality Assurance
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Reputable refurbishers thoroughly test and inspect devices to
              ensure they meet quality standards. Many refurbished products come
              with warranties, providing assurance to buyers about the device's
              functionality.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Environmental Impact:
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Opting for refurbished devices contributes to environmental
              sustainability by reducing electronic waste. Extending the life of
              existing electronics helps minimize the environmental footprint
              associated with manufacturing new devices.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse4"
              aria-expanded="false"
              aria-controls="flush-collapse4"
            >
              Brand Access:
            </button>
          </h2>
          <div
            id="flush-collapse4"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Refurbished electronics enable consumers to access premium brands
              and models that might be financially out of reach when purchasing
              new. This allows individuals to own high-quality devices without
              the premium price tag.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse5"
              aria-expanded="false"
              aria-controls="flush-collapse5"
            >
              Reduced Depreciation
            </button>
          </h2>
          <div
            id="flush-collapse5"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              New electronics often experience rapid depreciation in value
              shortly after purchase. Refurbished devices may retain their value
              better over time, offering a potentially better return on
              investment.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse6"
              aria-expanded="false"
              aria-controls="flush-collapse6"
            >
              Tested and Certified:{" "}
            </button>
          </h2>
          <div
            id="flush-collapse6"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Reputable refurbishers follow industry standards and guidelines,
              ensuring that the refurbished devices meet quality and safety
              requirements. Certifications and testing protocols provide
              additional assurance to buyers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
