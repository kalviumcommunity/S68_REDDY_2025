
router.delete("/:id", async (req, res) => {
    try {
      await Entity.findByIdAndDelete(req.params.id);
      res.json({ message: "Entity deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error deleting entity" });
    }
  });
  