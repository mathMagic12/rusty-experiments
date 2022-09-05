import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { GlobalArticleTutorial } from '../target/types/global_article_tutorial';
describe('global-article-tutorial', () => {
  // Configure the client to use the local cluster.
  it('Should write an article with 1 word successfully', async () => {
    const deployerKeypair = anchor.web3.Keypair.generate()
    const personThatPays = program.provider.wallet

    // Add your test here
    await program.rpc.initialize({
      accounts: {
        article: deployerKeypair.publicKey,
        personThatPays: personThatPays.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      },
      signers: [deployerKeypair],
    })

    await program.rpc.writeIntoArticle('hey', {
      accounts: {
        article: deployerKeypair.publicKey,
      },
      signers: [],
    })

    const articleData = await program.account.article.fetch(deployerKeypair.publicKey)
    expect(articleData.content).to.equal('hey ') // Note the space at the end, added by the program
  })

});
