context('LuckyDraw', () => {
  it('run successfully when normal path', () => {
    cy.visit('/');
    cy.get('a.creat_new_activity').click()
    cy.get('div.activity-setting input').type("2019")
    cy.contains('NEXT').click()
    cy.contains('Memuat').click()
    cy.contains('NEXT').click()
    cy.contains('NEXT').click()

    cy.contains('start').click()
    cy.contains('stop').click()

    cy.contains('start').click()
    cy.contains('stop').click()

    cy.contains('start').click()
    cy.contains('stop').click()

    cy.contains('next').click()

    cy.contains('start').click()
    cy.contains('stop').click()

    cy.contains('start').click()
    cy.contains('stop').click()

    cy.contains('next').click()

    cy.contains('start').click()
    cy.contains('stop').click()

    cy.contains('next').click()

    cy.contains('Hasil').click()
  })
});
